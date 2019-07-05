import Home         from 'js/components/Home';
import ClientesList from 'js/components/Clientes/List';
import EditClientePessoaFisica  from 'js/components/Clientes/PessoaFisica/Edit';
import CreateClientePessoaFisica from 'js/components/Clientes/PessoaFisica/Create';
import EditClientePessoaJuridica  from 'js/components/Clientes/PessoaJuridica/Edit';
import CreateClientePessoaJuridica from 'js/components/Clientes/PessoaJuridica/Create';

var indexRoutes = [
  { path: '/clientes/pessoajuridica/edit/:id',  name: 'Edit',       component: EditClientePessoaJuridica },
  { path: '/clientes/pessoafisica/edit/:id',    name: 'Edit',       component: EditClientePessoaFisica },
  { path: '/clientes/pessoajuridica/new',       name: 'Create',     component: CreateClientePessoaJuridica },
  { path: '/clientes/pessoafisica/new',         name: 'Create',     component: CreateClientePessoaFisica },
  { path: '/clientes',                          name: 'Clientes',   component: ClientesList },
  { path: '/',                                  name: 'Home',       component: Home }
];

export default indexRoutes;
