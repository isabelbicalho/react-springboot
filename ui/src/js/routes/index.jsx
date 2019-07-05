import Home         from 'js/components/Home';
import ClientesList from 'js/components/Clientes/List';
import ClienteEdit  from 'js/components/Clientes/Edit';
import ClienteCreate from 'js/components/Clientes/Create';

var indexRoutes = [
  { path: '/clientes/edit/:id', name: 'Edit',       component: ClienteEdit },
  { path: '/clientes/new',      name: 'Create',     component: ClienteCreate },
  { path: '/clientes',          name: 'Clientes',   component: ClientesList },
  { path: '/',                  name: 'Home',       component: Home }
];

export default indexRoutes;
