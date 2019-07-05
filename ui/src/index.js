import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import Layout from 'js/layouts';
import { Provider } from 'react-redux'
import store, { history } from 'js/store/index';
import { Router }    from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function Root(props) {
  return (
    <Provider store={props.store}>
      <Router history={history}>
        <Layout />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
