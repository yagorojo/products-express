
# Products Express

"Products Express" is a backend application built using Express that provides CRUD functionality for products. The application uses Prisma as the ORM and SQLite as the database. To secure the API endpoints, jsonwebtoken is used for authentication and authorization. Additionally, express-validator is used for data validation to ensure that the inputs are correct and consistent.


## Run Locally

Clone and go to the project directory.

```bash
  git clone https://github.com/yagorojo/products-express
  cd products-express
```

Install dependencies.

```bash
  npm install
```

Start the server.

```bash
  npm run dev
```

**This repository has a SQlite file in it (prisma/dev.db), if you want to use it put the location of the database in the DATABASE_URL envrioment variable, if not, follow the next steps.**

Create the database.

```bash
  npx prisma db push
```

Seed the database.

```bash
  npx prisma db seed
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`, `DATABASE_URL`, `API_SECRET`