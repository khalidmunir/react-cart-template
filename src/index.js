import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './components/counter'

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
