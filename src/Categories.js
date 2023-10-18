const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    }
  }, {
    autoCreate: false,
    id: false,
    versionKey: false,
    timestamps: true
});
  
const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = {
    Categories,
    categoriesSchema,
}