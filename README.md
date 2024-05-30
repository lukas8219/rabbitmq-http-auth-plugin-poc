# How it works (no charts hehe)

- Client (index.html - you can use LiveServer to run this) https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Points into TCP Relay
- The TCP relay connects w/ some RMQ upstream and via WebSocket, the Client(Frontend) can connect AND subscribe/publish to queues
- Whenever we try to connect OR interact w/ RabbitMQ - we have the HTTP Auth Plugin
- For each Command sent for RabbitMQ - it reaches our Backend API (on Index.js) looking for authorization

This way - we can expose a Public RabbitMQ and let Frontend interact w/ our queues directly
