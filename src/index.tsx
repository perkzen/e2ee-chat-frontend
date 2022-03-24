import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/app/store';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/ui';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <App />
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
