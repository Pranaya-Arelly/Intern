const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Route to serve JSON data for a specific task
app.get('/task/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const projectData = require('./ddugky_project.json');
    const task = projectData.tasks.find(t => t.task_id === parseInt(taskId, 10));
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const cors = require('cors');
app.use(cors());
