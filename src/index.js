// Versão do Gabriel Rangel - Fala, Coders! 
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

const app = express()
app.use(express.json())
const port = 3000

const { Categories } = require("./Categories")
const { Projects } = require("./Projects")
const { User } = require("./User")

//app.use(cors());
/*app.use(cors());
app.use(bodyParser.json())
*/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();  
})

// Category
app.get("/categories", async (req, res) => {
  const categories = await Categories.find()
  res.send(categories)
})
app.delete("categories/:id", async (req, res) => {
  const category = await Categories.findByIdAndRemove(req.params.id)
  res.send(category)
})
app.post("/categories", async (req, res) => {
  const { id, name } = req.body;
  const categories = new Categories({ id, name })
  await categories.save()
  res.send(categories)
})

// Projects
app.get("/projects", async (req, res) => {
  const projects = await Projects.find()
  res.send(projects)
})

app.get("/projects/:id", async (req, res) => {
  const project = await Projects.findById(req.params.id)
  res.send(project)
})

app.delete("/projects/:id", async (req, res) => {
  const project = await Projects.findByIdAndRemove(req.params.id)
  res.send(project)
})

app.post("/projects", async (req, res) => {
  const { name, descriptionProject, ownerProject, budget, category, services } = req.body;
  const project = new Projects({ name, descriptionProject, ownerProject, budget, category, services })
  await project.save()
  res.send(project)
})

app.patch("/projects/:id", async (req, res) => {
  const { name, descriptionProject, ownerProject, budget, category, cost, services } = req.body;
  const project = await Projects.findByIdAndUpdate(req.params.id,
    { name, descriptionProject, ownerProject, budget, category, cost, services }, {
    new: true
  })
  return res.send(project)
})

//Service
/*app.get("/services", async (req, res) => {
  const services = await Services.find()
  res.send(services)
})

app.delete("/services/:id", async (req, res) => {
  const service = await Services.findByIdAndRemove(req.params.id)
  res.send(service)
})

app.post("/services", async (req, res) => {
  const { name, cost, description } = req.body;
  const services = new Services({ name, cost, description })
  await services.save()
  res.send(services)
})*/

// User
app.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password })
  await user.save()
  res.send(user)
})

app.get("/user", async (req, res) => {
  const users = await User.find()
  res.send(users)
})


/*
app.get('/user', (req, res) => {
  const { email, password } = req.body;

  const user = User.find(user => user.email === email && user.password === password);
  if (user)
  {
      return res.status(200).json(user);
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
});*/



app.listen(port, () => {
  console.log("App Running")
  mongoose.connect('mongodb+srv://bernardoaraujons04:CSet1uFujxLirvAi@cluster0.8aa1xga.mongodb.net/?retryWrites=true&w=majority')
})

/*
-
-
-
-
-
-
-
-
-
-
-
-
*/