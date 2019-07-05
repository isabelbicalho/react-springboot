import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import Layout from 'js/layouts';
import { Provider } from 'react-redux'
import store, { history } from 'js/store/index';


function Root(props) {
  return (
    <Provider store={props.store}>
      <Layout />
    </Provider>
  );
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
