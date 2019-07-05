import React        from 'react';
import { Link }     from 'react-router-dom';
import { Button }   from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Button color="link"><Link to="/clientes">Gerenciar clientes</Link></Button>
      </div>
    );
  }
}

export default Home;
