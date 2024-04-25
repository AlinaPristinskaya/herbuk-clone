
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <div>
   <Header></Header>
   <Main></Main>
   <Footer></Footer>
  </div>

  );
}

export default App;

// the footer passes props to the Link component
// The Link component draws the required image based on the condition