const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/contactcards', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo Error:', err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  website: String,
  company: {
    name: String,
    tagline: String,
  },
  avatar: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/api/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.post('/api/contacts', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

app.put('/api/contacts/:id', async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(contact);
});

app.delete('/api/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
