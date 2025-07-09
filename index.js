import express from "express";

const PORT = 9877;

const server = express();

// part 1
server.get('/greet', (req, res) => {
    res.json({ "msg": `hi from get endpoint ${new Date()}` })
})

// part 2

server.param('name', (req, res, next, name) => {
    console.log(`i got name: ${name}`)
    next()
})

server.get('/greet/:name', (req, res) => {
    res.json({ "msg": `got name: ${req.params.name}` })
})

server.get('/test', async (req, res) => {
    const test = await fetch('http://localhost:9877/greet/Bob');
    const data = await test.json();
    try {
        if (data.msg === "got name: Bob") {
            res.json({ result: "ok" })
        } else {
            res.json({ result: "fail" })
        }
    } catch {
        res.json({ result: "fail" })
    }
})


server.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})