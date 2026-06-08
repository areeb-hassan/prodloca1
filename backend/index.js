require('dotenv').config()
const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

cloudinary.api.ping((error, result) => {
    console.log(result || error)
})

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
    
    const stream = cloudinary.uploader.upload_stream(
        { resource_type: 'auto', folder: 'images' },
        (error, result) => {
            if (error) return res.status(500).json({ error })
            res.json({ url: result.secure_url, public_id: result.public_id })
        }
    )
    stream.end(req.file.buffer)
})

app.get('/files', async (req, res) => {
    try {
        const folder = req.query.folder || 'images'
        const result = await cloudinary.api.resources_by_asset_folder(folder, {
            max_results: 50,
            tags: true,
            context: true
        })
        console.log(result)
        res.json(result.resources)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})