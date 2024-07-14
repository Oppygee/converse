/* eslint-disable react/prop-types */
import { unResolved } from "../../data/details"
import TableBody from "./TableBody"
import TableHead from "./TableHead"

const UnresolvedTable = () => {
  return (
    <table className="w-full ">
      <TableHead />
      {unResolved.map((data) => (
        <TableBody key={data.id} {...data} />
      ))}
    </table>
  )
}

export default UnresolvedTable
