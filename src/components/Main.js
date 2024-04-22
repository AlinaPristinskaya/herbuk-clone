import './Main.css';
import FormOrder from './FormOrder'


const Main = () => {
    return (
     <div className='bgColor'>
        <div>
         <h1>Order on Postmates</h1>
         <p>Get food, drinks, groceries, and more delivered.</p>
        </div>
        <div><FormOrder></FormOrder></div>
     </div>
    );
  };
  
  
  
  export default Main;