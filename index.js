import express from "express";

const PORT = 9877;

const server = express();

// part 1
server.get('/greet', (req, res) => {
    res.json({"msg": `hi from get endpoint ${new Date()}`})
})

server.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})