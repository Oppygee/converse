/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const CardDisputes = ({
  active,
  percentage,
  length,
  text,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`shadow-lg rounded-[0.5rem] ${className} content-center py-[0.5rem] px-[1.5rem] w-[15rem] cursor-pointer`}
    >
      <div className="flex items-center gap-5">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className="h-[7rem]"
        />

        <div className="">
          <h1>{length}</h1>
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  )
}

export default CardDisputes
