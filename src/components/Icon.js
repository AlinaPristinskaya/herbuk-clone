import './Burger.css'
import Icons from './icons.svg'
const Icon = ({id, className}) => {
    console.log(id, className )
    return (
<svg className={className}><use href={Icons + '#' + id}></use></svg>
    );
  };
  
  
  
  export default Icon;