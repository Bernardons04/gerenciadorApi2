const mongoose = require("mongoose")

const{ servicesSchema } = require("./Service")
const{ categoriesSchema } = require("./Categories")

const projectsSchema = new mongoose.Schema({
    name: String,
    budget: {
      type: Number,
      required: true,
    },
    descriptionProject: {
      type: String,
    },
    ownerProject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Referência ao modelo de Usuário
    },
    category: {
      type: mongoose.Schema.Types.String,
      ref: 'Categories'
    },
    cost: {
      type: Number,
      default: 0
    },
    services: {
      type: [servicesSchema],
    }
  }, {
    autoCreate: false,
    id: false,
    versionKey: false,
    timestamps: true
});
    
const Projects = mongoose.model('Projects', projectsSchema);

module.exports = {
    Projects,
    projectsSchema,
}