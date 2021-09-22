import React from 'react';
import './App.css';
import ReactDom from 'react-dom';


const App = ()=>{
  let myNumber = 11;
  let isOpen = false;
     return(
       <>
       <h1>Hello</h1>
       <h3 className="mycustomcolor">style</h3>
       <h3 className="mycustomcolor">
          {5+5}
          {'\nIntec'+'Brussel'}
          {

          console.log('hello console')
          
          }
          </h3>
          <h3 className="mycustomcolor">
           {

            myNumber + myNumber

           }
          </h3>

          <h3 className="mycustomcolor">
           {

             isOpen ?'yes':'No'

           }
          </h3>




       

    </>


     )

}

export default App;




