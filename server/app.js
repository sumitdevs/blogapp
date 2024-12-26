import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.status(200).json({msg:'hello world'});
});

app.listen(PORT, ()=>{
    console.log(`🚀 Server is up and running at http://localhost:${PORT}`);
})