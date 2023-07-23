import './index.css'
import MainScreen from './components/MainScreen';
import About from './components/About';
import Subscribe from './components/Subscribe';
import NameForm from './components/InputForm/InputForm';
import End from './components/End';

//http://192.168.0.183:3000

function App() {
  return (
    <>
      <MainScreen/>
      <About/>
      <Subscribe/>
      <End/>
    </>
  );
}

export default App;
