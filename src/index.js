import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import data from './testdata';

ReactDOM.render(<App forms={data.forms}/>, document.getElementById('root'));

