import Arms from "./Arms"
import Legs from "./Legs"

const Torso = (props) => {
  return (
    <>
      <h1>Torso</h1>
      <div>
        <Arms side={'Left'}/>
      </div>
      <div>
        <Arms side={'Right'}/>
      </div>
      <div>
        <Legs side={'Left'}/>
      </div>
      <div>
        <Legs side={'Right'}/>
      </div>
    </>
  )
}

export default Torso