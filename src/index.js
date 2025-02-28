import express from 'express';

const app = express();
const database_ex = 'Just a test'

app.get('/', (req, res) => {
    res.send('Hello World!');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);   
});
