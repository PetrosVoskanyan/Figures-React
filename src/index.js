import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { GeneralMuiConfig } from './components/main-providers/general-mui-config';

ReactDOM.render(
  <React.StrictMode>
    <GeneralMuiConfig>
      <BrowserRouter basename="/Figures-React">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </GeneralMuiConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
