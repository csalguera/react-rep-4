import Feet from "./Feet"

const Legs = (props) => {
  return (
    <>
      <h1>{props.side} Leg</h1>
      <div>
        <Feet side={props.side}/>
      </div>
    </>
  )
}

export default Legs