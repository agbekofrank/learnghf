const express = require('express');
const app = express();
app.use(express.static(`./dist/respDash`));
app.get(`/*`, function (req, res) {
    res.sendFile(`index.html`, { root: `dist/respDash/` }
    );
});
app.listen(process.env.PORT || 8080);

// const express = require('express');  
// const app = express();  
// app.use(express.static(__dirname + '/dist'));  
// app.all('*', (req, res) => {  
//   res.status(200).sendFile(__dirname + '/dist/index.html');  
// });  
// app.listen(process.env.PORT || 8080); 