import React , {Fragment, useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import Clima from './components/Clima.jsx'
import Error from './components/Error.jsx'


function App() {
//state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
})
const [consultar,setConsultar] = useState(false)
const [resultado,setResultado] = useState({})
const [error,setError] = useState(false)

 const {ciudad,pais} = busqueda

 useEffect(()=>{
   const consultarAPI = async () =>{
     if(consultar){
      const appID = '07571d7b2c062aac105d664c600961de';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
     const respuesta = await fetch(url);
     const resultado= await respuesta.json()
     console.log(resultado)
  //detecta si hubo 200 en la api
     setResultado(resultado)
     if(resultado.cod==='404'){
      setError(true)
    } else{setError(false)}
    } setConsultar(false)
  }
    consultarAPI()
  //eslint-disable-next-line
 }, [consultar])

 //carga condicional de componente
 let componente;
 if(error){
   componente = <Error mensaje='No hay resultados' />
 }else {
   componente =  <Clima resultado={resultado} />
 }
 

  return (
    <Fragment>
     <Header
     titulo='Clima React App'
     />
     <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
              
              />
            </div>
            <div className='col m6 s12'>
                {componente}
              
            </div>
          </div>
        </div>
     </div>
    </Fragment>
  );
}

export default App;
