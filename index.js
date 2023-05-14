// Imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
//app.use(express.static('src'));
app.use(express.json());
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/formsubmission', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/about.html')
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
 });

app.get('/404', (req, res) => {
    res.sendFile(__dirname + '/templates/404.html');
});

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/src/templates/404.html');
});

app.listen(port, () => console.info(`App listening on port ${port}`));