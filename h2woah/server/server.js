const express = require('express')
const cors = require('cors')

const {getEntries, addEntry, editEntry, deleteEntry} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/entries', getEntries)
app.post('/api/entries', addEntry)
app.put('/api/entries/:entryId', editEntry)
app.delete('/api/entries/:entryId', deleteEntry)

app.listen(4000, () => console.log(`running on port 4000`))