import React, { useEffect, useState } from 'react';
import './sketch.css';
import './app.css';
import './slidebar.css';
import './main.css';
import DevItem from './components/Devitem';
import DevForm from './components/DevForm';
import api from './services/api.js';

// component: Isolated block compound of HTML, CSS and JS, with dont interfier in the rest of the application
// state: Information(atributtes) that a parent component pass to child
// property: Information maintained by the component(imutability)


function App() {
  var [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const resp = await api.get('/devs');
      setDevs(resp.data);
    }
    loadDevs();
  }, []);

  
  async function handleAddDev(data) {
    const resp = await api.post('/devs', data);
    setDevs([...devs, resp.data]);
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
          </ul>
       
      </main>
    </div>
  );
}

export default App;
