import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import { Loading } from './components';
import Routes from './pages';
import store from './store';

import './styles.scss';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000);
  }, [splash]);

  return (
    <>
      {splash ? (
        <Loading variant='dark' splash={true} />
      ) : (
        <div className='App'>
          <Provider store={store}>
            <Routes />
          </Provider>
        </div>
      )}
    </>
  );
}

export default App;
