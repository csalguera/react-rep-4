import Hands from "./Hands"

const Arms = (props) => {
  return (
    <>
      <h1>{props.side} Arm</h1>
      <div>
        <Hands side={props.side}/>
      </div>
    </>
  )
}

export default Arms