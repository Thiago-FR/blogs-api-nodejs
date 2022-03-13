
---

# Boas vindas ao repositório do API de Blogs!

---

# Sumário

- [Habilidades Desenvolvidas](#habilidades)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Conexão com o Banco](#conexao-db)
- [Para testar o projeto](#testar-o-projeto)
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
HOSTNAME=
JWT_SECRET=
PORT=
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

## Protótipo <a name="prototipo"></a>