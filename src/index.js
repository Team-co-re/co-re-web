import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// npm i redux react-redux
// npm i --save-dev redux-devtools-extension
// npm install styled-components
// npm install axios
// npm install @reduxjs/toolkit react-redux <- 리덕스는 위에 생성했음
// npm install redux-logger