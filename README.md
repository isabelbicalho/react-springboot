=================
Considerações
=================

O backend encontra-se dentro da pasta src da raiz.
Foram criadas duas tabelas para o banco de dados PassoFisica e PessoaJuridica. Elas estão disponíveis dentro da pasta 'models', no backend.
Os métodos REST encontram-se dentro da pasta 'web'.

O frontend foi feito com react/redux, e encontra-se dentor da pasta ui/src.
As rotas são mapeadas dentro da pasta js/routes.
Os componentes para criação, edição e tabela estão na pasta js/components.
Exite um layout com o cabeçalho dentro da pasta js/layouts.
O estado da aplicação é todo mapeado pelo reducer em js/reducers.
As ações de fetch para o backend encontram-se em js/actions.

O projeto foi desenvolvido no Linux, e foi utilizada a versão mais nova do jdk e react.

É possível visualizar a documentação gerada pelo Swagger após a iniciação do backend em:
http://localhost:8080/swagger-ui.htm


=================
Run application
=================

```bash
./mvnw spring-boot:run
```

=================
Install & run UI
=================

```bash
cd ui
npm install
npm start
```
