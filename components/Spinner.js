import React from 'react'
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <BounceLoader speedMultiplier={2} color={"#348DFA"} />
    </div>
  )
}

export default Spinner
