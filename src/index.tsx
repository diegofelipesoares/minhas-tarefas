import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se quiser começar a medir o desempenho no seu app, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Para mais informações, acesse:
// https://bit.ly/CRA-vitals
// reportWebVitals();
