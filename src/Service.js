const mongoose = require("mongoose")

const servicesSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    cost: {
      type: Number
    },
    description: {
      type: String,
      require: true,
    }
  }, {
    autoCreate: false,
    id: false,
    versionKey: false,
    timestamps: true
});

const Services = mongoose.model('Service', servicesSchema);

module.exports = {
    Services,
    servicesSchema,
}