import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/app/store';
import { Layout } from './components/ui';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
