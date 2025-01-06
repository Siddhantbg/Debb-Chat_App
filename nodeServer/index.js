const io = require('socket.io')(8000, {
    cors: {
      origin: "*", // Allow requests from any origin (use specific origin for production)
      methods: ["GET", "POST"],
    },
  });
  
  const users = {};
  
  // Handle socket connection
  io.on('connection', (socket) => {
    console.log('A user connected.');
  
    // Listen for 'new-user-joined' event
    socket.on('new-user-joined', (name) => {
      console.log(`${name} joined the chat.`);
      users[socket.id] = name; // Map socket ID to the user's name
      socket.broadcast.emit('user-joined', name); // Notify others about the new user
    });
  
    // Listen for 'send' event to handle messages
    socket.on('send', (message) => {
      socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });
  
    // Handle user disconnect
    socket.on('disconnect', () => {
      const name = users[socket.id];
      if (name) {
        console.log(`${name} left the chat.`);
        socket.broadcast.emit('user-left', name);
        delete users[socket.id];
      }
    });
  });
  