// paquetes que vienen con node
const fs = require('fs')
const randomQuotes = require("random-quotes");

const miModulo = require("./miModulo.js")
//console.log(randomQuotes)
console.log(randomQuotes.default())
//console.log(fs)

/* const folderName = process.argv[2] || 'proyecto'

fs.mkdirSync(folderName);
fs.mkdirSync(folderName + "/images")
fs.writeFileSync(folderName+"/index.html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
<h1>Aplicacion de template</h1>    
</body>
</html>`)
fs.writeFileSync(folderName + "/style.css", `body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    color: #333;
}
    }`);
fs.writeFileSync(folderName + "/script.js", `alert("Bienvenidos")`);
 */
