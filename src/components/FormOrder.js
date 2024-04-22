import './FormOrder.css'
import Location from './Location.js'
import Clock from './Clock'
const FormOrder = () => {
    return (
      <div >
       <form>
      <div className='flex'>
         <div className='loc'>
           <Location></Location>
           <input placeholder="Enter delyvery address"></input>
         </div>
         <div className='clock'>
         <Clock></Clock>
           <select>
            <option>Deliver Now</option>
            <option>Schedule for later</option>
           </select>
         </div>
         <button className='searchButton'>search here</button>
      </div>
       </form>
      </div>
    );
  };
  
  
  
  export default FormOrder;