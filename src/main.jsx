//===========
//  Imports 
//===========
// Imports React.
import React from 'react'
// Imports ReactDOM object from the react-dom/client module.
import ReactDOM from 'react-dom/client'
// Imports Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css'
// Imports Popper.js (i.e. javascript for Bootstrap).
import * as bootstrap from 'bootstrap';
// Imports App component.
import App from './App.jsx'

//=============
//  Functions
//=============
// Instructs React to render the App component within the strict mode wrapper provided by <React.StrictMode>.
// *CREDIT: Coder’s understanding of this function developed thanks to Xpert Learning Assistant’s (2024) answer to “explain this: [code below pasted]”.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
