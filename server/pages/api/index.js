// pages/api/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Job schema and model
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
});

const Job = mongoose.model('Job', jobSchema);

// Application schema and model
const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  portfolio: { type: String },
  resume: { type: String, required: true },
});

const Application = mongoose.model('Application', applicationSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/uploads'); // Use /tmp for temporary file storage in Vercel
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/api/jobs', async (req, res) => {
  const { title, description, location } = req.body;
  try {
    const newJob = new Job({ title, description, location });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add job' });
  }
});

app.post('/api/applications', upload.single('resume'), async (req, res) => {
  const { jobId, name, email, phone, portfolio } = req.body;
  const resume = req.file ? req.file.path : null;

  if (!resume) {
    return res.status(400).json({ error: 'Resume upload failed' });
  }

  try {
    const application = new Application({ jobId, name, email, phone, portfolio, resume });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Serverless Function Handler
export default (req, res) => {
  app(req, res); // Pass the Express app to the Vercel handler
};
