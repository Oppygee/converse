/* eslint-disable react/prop-types */

const TableBody = ({ ProjectTitle, ProjectID, DateofComplain, Status }) => {
  return (
    <tbody className="text-center border-b ">
      <td className="py-[1rem ">{ProjectTitle}</td>
      <td className="py-[1rem]">{ProjectID}</td>
      <td className="py-[1rem]">{DateofComplain}</td>
      <td className={`py-[1rem] `}>
        <p
          className={`py-[0.5rem] rounded-[1rem] ${
            Status === "Unresolved"
              ? "bg-green-300 "
              : Status === "Resolving"
              ? "bg-red-300 "
              : "bg-blue-300 "
          } `}
        >
          {Status}
        </p>
      </td>
      <td className="py-[1rem]">
        <button className="border-2 border-blue-300 py-[0.5rem] px-[1rem] bg-white rounded-[0.5rem] ">
          Preview
        </button>
      </td>
    </tbody>
  )
}

export default TableBody
