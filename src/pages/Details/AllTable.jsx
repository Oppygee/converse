/* eslint-disable react/prop-types */
// import { disputeData } from "../../data/details"
import TableBody from "./TableBody"
import TableHead from "./TableHead"

const AllTable = ({mapData=[]}) => {
  return (
    <table className="w-full ">
      <TableHead />
      {mapData.map((data) => (
        <TableBody key={data.id} {...data} />
      ))}
    </table>
  )
}

export default AllTable
