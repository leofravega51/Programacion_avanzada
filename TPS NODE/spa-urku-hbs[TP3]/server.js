const express = require('express')
const app = express();
const hbs = require('hbs')

require('./hbs/helpers');

// Generamos una variable de entorno para el deploy en Heroku
const port = process.env.PORT || 2000;

app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partiales')

// llamamos al render de home
app.get('/',(req, res) => {
    res.render('home')
})

// Vistas principales

app.get('/home',(req, res) => {
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/blog', (req,res)=>{
    res.render('blog')
})

app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/portfolio', (req,res)=>{
    res.render('portfolio')
})

//Vistas parciales

app.get("/portfolio-alt", (req, res) => {
    res.render("./partiales/portfolio-alt");
  });
  
  app.get("/portfolio-raw", (req, res) => {
    res.render("./partiales/portfolio-raw");
  });
  
  app.get("/portfolio-masonry", (req, res) => {
    res.render("./partiales/portfolio-masonry");
  });
  
  app.get("/portfolio-item", (req, res) => {
    res.render("./partiales/portfolio-item");
  });
  
  app.get("/hover", (req, res) => {
    res.render("./partiales/hover");
  });
  

  app.get("/blog-post", (req, res) => {
    res.render("./partiales/blog-post");
  });

  app.get("/documentation", (req, res) => {
    res.render("./partiales/documentation");
  });
  
  app.get("/design_styles", (req, res) => {
    res.render("./partiales/design-styles");
  });


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
    //listen recibe un callback, le paaso una funcion
})