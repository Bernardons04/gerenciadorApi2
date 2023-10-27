const mongoose = require("mongoose")

const servicesSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number
    },
    description: {
      type: String,
      required: true,
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