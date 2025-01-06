# Debb-Chat Application

Debb-Chat is a real-time chat application that uses WebSockets to enable seamless communication between users. The application is powered by Socket.IO for real-time messaging and is styled with custom CSS and Bootstrap.

## Features

- Real-time messaging functionality.
- Responsive design for both desktop and mobile devices.
- Notifications with audio alerts for incoming messages.
- User-friendly interface with smooth interactions.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Socket.IO
- **Deployment:** Vercel

## Project Structure

```plaintext
.
├── js
│   └── client.js       # Frontend JavaScript logic
├── nodeServer
│   ├── api
│   │   └── socket.js   # Backend Socket.IO handler
│   ├── index.js        # Main server file
│   └── package.json    # Node.js dependencies
├── public
│   └── audio.mp3       # Notification sound
├── .env                # Environment variables
├── index.html          # Main HTML file
├── style.css           # Custom CSS styling
├── vercel.json         # Vercel deployment configuration
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/debb-chat.git
   cd debb-chat
   ```

2. Install dependencies:

   ```bash
   cd nodeServer
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Open `index.html` in your browser or serve it locally using a live server (e.g., VS Code Live Server).

## Environment Variables

Create a `.env` file in the `nodeServer` directory with the following:

```plaintext
PORT=8000
```

## Deployment

The project is deployed on Vercel. You can access it via this link:

**[Live Website-Link](https://debb-app.vercel.app/)**

## Usage

1. Open the application in a browser.
2. Enter your name when prompted to join the chat.
3. Start sending and receiving messages in real time.

## Screenshots

### Chat Interface

![Chat Interface](https://via.placeholder.com/800x400?text=Chat+Interface)

### Responsive Design

![Responsive Design](https://via.placeholder.com/400x800?text=Responsive+Design)

## Future Enhancements

- Add user authentication.
- Implement chat history persistence using a database.
- Support for media sharing (images, videos).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

**Siddhant**  
Portfolio: [https://siddhant-portfolio-chi.vercel.app/](https://siddhant-portfolio-chi.vercel.app/)
