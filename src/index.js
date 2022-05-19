import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './main.css';
import 'react-toastify/dist/ReactToastify.css'; // попапы

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
