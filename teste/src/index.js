import React from 'react'; // import é igual const 
import ReactDOM from 'react-dom'; // linhas 1 e 2 sempre tem q ter
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById/*getElementById é igual ao document.queryselector*/('root'));
registerServiceWorker();

