const express = require("express");
const app = express();
const port = 5050;

app.get("/", (req, res) => res.send(" Hello World :) !"));
app.get("/products", (req,res) => {
   const products = [
     {
       id: 1,
       name: " Shoes ",
     },
     {
       id: 2,
       name: " Bags ",
     },
     {
       id: 3,
       name: " Pens ",
     },
   ];

  res.json(products);
})

app.post('/products', (req, res) => {

    const products = [
        {
          id: 1,
          name: " Shoes ",
        },
        {
          id: 2,
          name: " Bags ",
        },
        {
          id: 3,
          name: " Pens ",
        },
     ];

    res.json(products);
    
})



app.listen(port, () => console.log(`App listening on port ${port}!`));