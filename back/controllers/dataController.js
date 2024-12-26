import dataModel from "../models/dataModel.js";


const dataController = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newData = new dataModel({ name, email, phone, subject, message, date: Date.now() });
    await newData.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await dataModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};

// Export both functions
export {
  dataController,
  getContacts,
};
