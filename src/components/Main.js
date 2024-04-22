import './Main.css';
import FormOrder from './FormOrder'


const Main = () => {
    return (
     <div className='bgColor'>
        <div>
         <h1>Order on Postmates</h1>
         <h2>Get food, drinks, groceries, and more delivered.</h2>
        </div>
        <div><FormOrder></FormOrder></div>
     </div>
    );
  };
  
  
  
  export default Main;