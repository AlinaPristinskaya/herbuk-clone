import './Link.css'
import Fb from './Fb.js'
import Twitter from './Twitter.js'
import Inst from './Inst.js'


const Link = ({name}) => {
  if(name==="facebook")
  return  <a className='socLink'><Fb></Fb></a>
  if (name==="twitter")
  return <a className='socLink'><Twitter></Twitter></a>
  if (name==="instagram")
  return <a className='socLink'><Inst></Inst></a>
}
  export default Link;



//   the footer passes props to the Link component
// The Link component draws the required image based on the condition