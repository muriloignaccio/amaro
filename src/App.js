import React from 'react';
import { Provider } from 'react-redux';

// import Loading from './components/Loading';
import Routes from './pages';
import store from './store';

import './styles.scss';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
