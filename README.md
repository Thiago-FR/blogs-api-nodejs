
---

# Boas vindas ao repositório do API de Blogs!

---

# Sumário

- [Habilidades Desenvolvidas](#habilidades)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Conexão com o Banco](#conexao-db)
- [Para testar o projeto](#testar-o-projeto)
- [Endpoint's](#endpoint)
  - [Para criar usuário POST /user](#user)
  - [Para gerar token POST /login](#login)
  - [Para cadastrar categoria POST /categories](#categories)
  - [Para cadastrar post POST /post](#post)
  - [Para editar post PUT /post/:id](#post-id)
  - [Mais endpoints](#mais-endpoints)
- [Protótipo](#prototipo)


## Habilidades desenvolvidas: <a name="habilidades"></a>

Nesse projeto, você foi construido um back-end usando `ORM` com o pacote `sequelize` do `npm`, e é capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`
 - Gerar token `JWT`

---

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido"></a>

Uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Foi arquitetado e desenvolvido uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que são conectados ao banco de dados.

Foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso,uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.

Para fazer um post é necessário usuário e login, portanto foi trabalhado a **relação entre** `user` e `post`. Para a utilização de categorias para os posts, foi trabalhado a relação de `posts` para `categorias` e de `categorias` para `posts`.

---

### Conexão com o Banco: <a name="conexao-db"></a>

**⚠️ IMPORTANTE! ⚠️**

Essa API utiliza as seguintes variáveis de ambiente:

```sh
MYSQL_USER=
MYSQL_PASSWORD=
HOST=
JWT_SECRET=
DB_PORT=
DATABASE=
DIALECT=
```
---

## Para testar o projeto: <a name="testar-o-projeto"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/blogs-api-nodejs.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Instale as dependências
  * `npm install`

3. Para criar e popular o Banco de Dados.

- `npm prestart`

4. Para iniciar o server.

- `npm start`

---

## Endpoint's <a name="endpoint"></a>

### Para criar usuário POST <a name="user"></a>

* Endpoint: `https://project-blogs-api.herokuapp.com/user`

```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

### Para gerar token POST /login <a name="login"></a>

* Endpoint: `https://project-blogs-api.herokuapp.com/login`

```json
{
  "email": "brett@email.com",
  "password": "123456"
}
```

### Para cadastrar categoria POST /categories <a name="categories"></a>

* Endpoint: `https://project-blogs-api.herokuapp.com/categories`

```json
 {
   "name": "Inovação"
 }
```

### Para cadastrar post POST /post <a name="post"></a>

* Endpoint: `https://project-blogs-api.herokuapp.com/post`

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

### Para editar post PUT /post/:id <a name="post-id"></a>

* Endpoint: `https://project-blogs-api.herokuapp.com/post/:id`

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

### Mais endpoints <a name="mais-endpoints"></a>

* **GET**: `https://project-blogs-api.herokuapp.com/user`
* **GET**: `https://project-blogs-api.herokuapp.com//user:id`
* **GET**: `https://project-blogs-api.herokuapp.com//categories`
* **GET**: `https://project-blogs-api.herokuapp.com//post`
* **GET**: `https://project-blogs-api.herokuapp.com/post/:id`
* **DELETE**: `https://project-blogs-api.herokuapp.com/post/:id`
* **DELETE**: `https://project-blogs-api.herokuapp.com/user/me`
* **GET**: `https://project-blogs-api.herokuapp.com/post/search?q=:searchTerm`

---

## Protótipo <a name="prototipo"></a>

![Prototipo](/Api-blogs.gif)