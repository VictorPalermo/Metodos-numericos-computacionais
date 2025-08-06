import express from 'express';

const app = express();
const PORT = 8081;
app.use(express.static('public'));
app.listen(PORT, async () =>{
    console.log("OK👍", PORT);
});