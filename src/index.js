import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { EventProvider } from "../src/components/events/context";
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  
  <React.StrictMode>
        <EventProvider>

    <Provider store={store}>

      <App />
    </Provider>
    </EventProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
