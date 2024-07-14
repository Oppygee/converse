/* eslint-disable react/prop-types */
import { resolved } from "../../data/details"
import TableBody from "./TableBody"
import TableHead from "./TableHead"

const ResolvedTable = () => {
  return (
    <table className="w-full ">
      <TableHead />
      {resolved.map((data) => (
        <TableBody key={data.id} {...data} />
      ))}
    </table>
  )
}

export default ResolvedTable
