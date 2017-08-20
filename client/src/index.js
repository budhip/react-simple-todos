import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import TodoComponent from './TodoComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoComponent />, document.getElementById('root'));
registerServiceWorker();
