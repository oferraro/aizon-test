### Before run the server
Copy .env_example to .env
`cp .env_example .env` 

### Run tests
`npm run test`

### Run dev server
`npm run dev`

### With Postman
- Create Service (Post)
`http://localhost:3000/solutions`

    params: { "name": "Any name" }

- Delete Service (Delete)
`http://localhost:3000/solutions/serviceId`
