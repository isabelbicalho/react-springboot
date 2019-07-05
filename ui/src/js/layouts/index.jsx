import React                from 'react';
import { Container }        from 'reactstrap';
import AppNavbar            from './Navbar';
import routes               from 'js/routes/index';
import { Route, Switch }    from "react-router-dom";


class Layout extends React.Component {

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Switch>
            {routes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </Container>
      </div>
    )
  }
}

export default Layout;
