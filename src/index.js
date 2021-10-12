// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Redux imports
import store from './redux/store';
import { Provider } from 'react-redux';

// component imports
import App from './components/App';

// import UI css
import '@teamleader/ui-colors/index.css';
import '@teamleader/ui-typography/index.css';
import '@teamleader/ui-animations/index.css';

// css imports
import './css/index.css';

// Provider component links store to the app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
