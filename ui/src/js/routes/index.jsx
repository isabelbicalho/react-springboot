import Home         from 'js/components/Home';
import ClientesList from 'js/components/Clientes/List';

var indexRoutes = [
  { path: '/clientes',  name: 'Clientes', component: ClientesList },
  { path: '/',          name: 'Home',     component: Home }
];

export default indexRoutes;
