import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  subject: String,
  message: String,
  date: { type: Date, require: true },
});

const dataModel = mongoose.model("data", dataSchema);

export default dataModel;
