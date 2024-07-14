/* eslint-disable no-unused-vars */
import { useState } from "react"
import { allDetails } from "../../data/details"
import CardDisputes from "./CardDisputes"
import AllTable from "./AllTable"
import UnresolvedTable from "./UnresolvedTable"
import ResolvingTable from "./ResolvingTable"
import ResolvedTable from "./ResolvedTable"

const Details = () => {
  const [active, setActive] = useState(1)

  function handleActive(id) {
    setActive(id)
  }

  return (
    <div className="w-full min-h-screen space-y-9 p-5 ">
      <div className="flex justify-between">
        {allDetails.map((allDetail, i) => (
          <CardDisputes
            key={i}
            {...allDetail}
            active={active}
            onClick={() => handleActive(i)}
            className={active === i && `bg-${allDetail.bg} `}
          />
        ))}
      </div>

      <div className="w-full">
        {active === 0 && <AllTable />}
        {active === 1 && <UnresolvedTable />}
        {active === 2 && <ResolvingTable />}
        {active === 3 && <ResolvedTable />}
      </div>
    </div>
  )
}

export default Details
