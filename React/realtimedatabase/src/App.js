import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase';

function App() {
  const db = firebase.ref('/users')
  const getData = () => {

    console.log('testing get data')
    db.on('value', data => { console.log(data.toJSON()) }
    )
  }
  const addData = () => {

    db.push({

      title: 'test',
      body: 'insen'

    }).then(() => {
      console.log('created data')
    })

  }

  const updateData = ()=>{
    
    
    console.log('test')
    db.child('-MkbIqFclu8_--eqW2l7').update({

      title:'this is update title'
    }).then(()=>console.log('update')).catch(err =>console.log('error'))

  }
  return (
    <div className="container">
      <div className="row p-4 text-center">
        <div className="col">
          <h1>Realtime Database</h1>
          <button className="btn btn-primary btn-lg m-1" onClick={getData}>Get data</button>
          <button className="btn btn-warning btn-lg m-1" onClick={addData}>Add data</button>
          <button className="btn btn-dark btn-lg m-1" onClick={updateData}>Update data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
