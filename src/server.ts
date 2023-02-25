import WebSocket, { WebSocketServer } from 'ws';


const ws = new WebSocketServer({
    port: 8080
})

ws.on("listening", () => {
    console.log("Running wild on port 8080")
})

ws.on("connection", (connection) => {
    console.log("connected")
    connection.send("Handshake from signaling server")



    connection.on("message", (message) => {
        console.log("user says" + message)
    })

    connection.on("close", () => {
        console.log("End connection")
    })
})
