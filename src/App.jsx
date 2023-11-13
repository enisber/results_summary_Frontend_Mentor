import './App.css'
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Attribution from './components/Attribution';

const App = () =>{
    return(
        <>
        <div className='container'>
            <Resultado />
            <Resumen />    
        </div>
        <Attribution />
        </>
    )
}

export default App;