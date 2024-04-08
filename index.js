const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./api/v1/swaggerDef');

const app = express();

// Rota para servir a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
