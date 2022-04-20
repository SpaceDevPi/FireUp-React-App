import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { EventProvider } from "../src/components/events/context";
// import "bootstrap/dist/css/bootstrap.min.css"
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom';

let persistor = persistStore(store);
ReactDOM.render(
  
  <React.StrictMode>
        <EventProvider>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>

      <App />
      </BrowserRouter>  
      </PersistGate>
    </Provider>
    </EventProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
