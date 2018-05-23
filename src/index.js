import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Layout from './Layout';
import './index.css';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
