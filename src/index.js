// Versão do Gabriel Rangel - Fala, Coders! 
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

const app = express()
app.use(express.json())
const port = 3000

const{ Categories } = require("./Categories")
const{ Projects } = require("./Projects")
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.json())
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

app.delete("/projects/:id", async (req, res) => {
  const project = await Projects.findByIdAndRemove(req.params.id)
  res.send(project)
})

app.post("/projects", async (req, res) => {
  const { name, budget, category, services } = req.body;
  const project = new Projects({ name, budget, category, services })
  await project.save()
  res.send(project)
})

app.patch("/projects/:id", async (req, res) => {
  const { name, budget, category } = req.body;
  const project = await Projects.findByIdAndUpdate(req.params.id,
    { name, budget, category }, {
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

app.listen(port, () => {
  console.log("App Running")
  mongoose.connect('mongodb+srv://bernardoaraujons04:CSet1uFujxLirvAi@cluster0.8aa1xga.mongodb.net/?retryWrites=true&w=majority')
})