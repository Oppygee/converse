/* eslint-disable react/prop-types */
import { resolving } from "../../data/details"
import TableBody from "./TableBody"
import TableHead from "./TableHead"

const ResolvingTable = () => {
  return (
    <table className="w-full ">
      <TableHead />
      {resolving.map((data) => (
        <TableBody key={data.id} {...data} />
      ))}
    </table>
  )
}

export default ResolvingTable
