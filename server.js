const WebSocket = require('ws');

// constants
const PORT = 3000;

// implementation
const server = new WebSocket.Server({ port: PORT});

server.on('connection', ws => {
    ws.on('message', message => {
        if (message === 'exit') {
            ws.close();
        } else {
            server.clients.forEach(client => {
                if(client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }
    })

    ws.send('Welcome to the WS Chat');
})