
# :orange: Laranja Express - :motor_scooter: App de delivery

Esse projeto foi desenvolvido em grupo.

O objetivo deste projeto foi desenvolver um aplicativo de delivery para a distribuidora de bebidas, que agilizasse as atividades da equipe de vendas e dos clientes, permitindo o acesso via login, possibilitando o gerenciamento e atualização de status dos pedidos. É possível também através de uma conta Admin cadastrar novos usuários sejam eles vendedores ou clientes.

<details><summary>Tecnologias utilizadas</summary>
<details><summary>No Front-end</summary>

- React.JS, React-Hook-Forms
- JavaScript
- TypeScript
- CSS
- Jest
- React Testing Library
- Axios

</details>

<details><summary>No Back-end</summary>

- Node.JS
- Express
- Sequelize
- MySQL
- JWT
- Jest
- MD5

</details>

**Ferramentas:** Metodologias agéis como Scrum e Kanban, Trello, Figma

</details>

## Destaque do projeto

 - Entre 29 grupos e com um prazo de 12 dias, alcançamos a marca de terminar o projeto em 5 dias, sendo assim os primeiros a entregar.
 - Projeto desenvolvido no Figma, sendo realizado todas as estilizações CSS de forma fiel ao protótipo mobile e desktop.

<details><summary>Curiosidades</summary>

**O porquê do nome:** O nome foi escolhido devido a uma piada interna da escola em que nós referimos o nome cerveja a suco de la

</details>

  <summary>
    <strong>Quer baixar nosso projeto?</strong>
  </summary><br>
<details>

  1. Clone o repositório

  - Use o comando: `git clone `.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd `

  2. Instale as dependências

  - Para isso, use o seguinte comando: `npm install`

</details>

## O que desenvolvemos?

## `Tela de login`
<details>

Foi desenvolvido uma tela para **fazer login** e **registrar** no sistema, não sendo possível acessar com dados inválidos ou inexsistentes no banco de dados, após o acesso a aplicação verifica os dados salvos no localstorge para direciona-lo a página correta.

  {
    email: "adm@deliveryapp.com",
    password: "$#zebirita#$",
    role: "administrator",
  },
  {
    email: "fulana@deliveryapp.com",
    password: "fulana@123",
    role: "seller",
  },
  {
    email: "zebirita@email.com",
    password: "--adm2@21!!--",
    role: "customer",
  },

</details>

## `Tela de Cliente`
<details>

Foi desenvolvido uma tela de cliente para que seja possível **navegar e escolher produtos**, **adicionar produtos ao carrinho**, **fazer checkout (gerar uma nova venda)**, **consultar pedidos** e **acessar detalhes do mesmo**.

</details>

## `Tela de Administrador`
<details>

- Foi desenvolvido uma tela para realizar o cadastro de clientes e pessoas vendedoras e verificar todos os usuários cadastrados no app.

</details>
