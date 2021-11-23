const express = require("express"); // meu app usa o express 

const app = express();

const PORT = process.env.PORT || 3000; // diz qual eh a porta pra acessar as coisas

app.use('/', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("Hello World"); // o que vai printar no site quando abrir
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});