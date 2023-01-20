
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import {FaCircle } from 'react-icons/fa';

function App() {

  const [data,setdata] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setdata(response.data.results)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  


  },[]);
  return (
    <div className="app">
      {
        data.map((item)=>{
          return(
            <div className='main'>
              <div className="photo">
                <img src={item.image}></img>
              </div>
              <div className="caption">
              <section>
                <h1>{item.name}</h1>
                <FaCircle className='icon' style={{fontSize: '12px',color: item.status==='Alive' ? 'green' : item.status==='Dead'? 'red' : 'black'}}/>{item.status} - {item.species}
              </section>
              <section>
                <span className='txt-grey'>Last Known location :</span><br></br>
                <span className='txt'>{item.location.name}</span>
              </section>
              <section>
                <span className='txt-grey'>First seen in :</span><br></br>
                <span>{item.origin.name}</span>
              </section>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
