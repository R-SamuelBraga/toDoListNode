//Arquivo usado para subir o servidor
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(3333, () => console.log(`server runnin on port ${PORT}`));

