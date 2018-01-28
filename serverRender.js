import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/app'; 

axios.get('${config.serverUrl()}/api/forms')
  .then(resp => {
    ReactDOMServer.renderToString(<App initialForms={[]} />);
  }); 