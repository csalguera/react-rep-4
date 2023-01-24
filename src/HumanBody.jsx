import Head from "./Head"
import Torso from "./Torso"

const HumanBody = (props) => {
  return (
    <>
      <div>
        <Head />
      </div>
      <div>
        <Torso />
      </div>
    </>
  )
}

export default HumanBody