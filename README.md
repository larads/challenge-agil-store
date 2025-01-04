# Gerenciamento de Produtos para a Loja AgilStore
Este é um projeto de API desenvolvido com **Fastify**, **Prisma** e **Docker**. Ele permite realizar operações CRUD (Criar, Ler, Atualizar, Excluir) de **usuários** e **produtos**. Siga as instruiçoes embaixo para testar a API

## Pré-requisitos

E importante, ter os seguintes programas instalados em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Insomnia](https://insomnia.rest/download)

## Tecnologias Utilizadas
- Node.js ,
- Prisma-ORM
- Fastify
- Zod
- Typescript

## Passos para rodar o projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto:

```bash
git clone https://github.com/larads/AgilStore.git
cd AgilStore
```
### 2. E importante copiar o .env.example criando um arquivo no codigo .env e passando as informações do DATABASE_URL que possui o example.
### 3. Rodar o Docker com Docker Compose
```bash
docker-compose up -d
```
### 4. npx prisma migrate dev
```bash
npx prisma migrate dev
```
### 5. Instalar Dependências e Rodar a API
```bash
npm install
npm run dev
```
### 6. Para Verificar as tabelas e Produtos registrados de forma OnLine
```bash
npx prisma studio
```

## Funcionalidades
### 1. Adicionar Produto
Método: POST
URL:
```bash
 http://localhost:3333/product
```
JSON:
```bash
{
  "name": "Produto Teste",
  "category": "test",
  "stockQuantity": 50,
  "price": 1,99
}
```
### 2. Listar o Produto : Metodo GET ,
URL: lista todos os produtos
```bash
 http://localhost:3333/products
```
URL: Filtra pela Categoria
```bash
 http://localhost:3333/products?category=test
```
URL: Filtra pelo preço em ordem
```bash
http://localhost:3333/products?sortBy=price&order=desc
```
### 3. Atualizar Produto : Metodo PATH ,
URL: Atualiza as informaçoes do produto pelo ID
```bash
http://localhost:3333/product/:id
```
JSON
```bash
{
    "name": "novo produto",
}
```
JSON

### 4. Deleta o Produto : Metodo DELETE ,
URL: deleta o produto pelo ID
```bash
http://localhost:3333/product/:id
```
```bash
{
    "confirm": true
}
```
### 5. Buscar Produto: Metodo GET,
URL : Busca o produto pelo Id
```bash
http://localhost:3333/product?id=id
```
URL : Busca o produto pelo Name
```bash
http://localhost:3333/product?name=name
```
