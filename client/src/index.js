import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/todoItem.css';
import TodoComponent from './TodoComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
registerServiceWorker();
