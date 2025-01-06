const socket = io('http://localhost:8000');

// Elements
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const chatBox = document.querySelector('.chat-box'); // Correct container

// Initialize audio
var audio = new Audio('public/audio.mp3');

// Function to append messages
const append = (message, position) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageElement.classList.add('message');
  messageElement.classList.add(position);
  chatBox.appendChild(messageElement); // Append messages inside chat-box
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom

  if (position === 'left') {
    // Play audio only if the user has interacted
    audio.play().catch((error) => {
      console.warn('Audio play blocked:', error.message);
    });
  }
};

// Prompt user for name
const name = prompt('Enter your name to join');
socket.emit('new-user-joined', name);

// Listen for events
socket.on('user-joined', (data) => {
  append(`${data} joined the chat`, 'left');
});

socket.on('receive', (data) => {
  append(`${data.name}: ${data.message}`, 'left');
});

socket.on('user-left', (name) => {
  append(`${name} left the chat`, 'left');
});

// Send message on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from reloading the page
  const message = messageInput.value;
  append(`You: ${message}`, 'right');
  socket.emit('send', message);
  messageInput.value = ''; // Clear input field
});
