# Real-time Chat App

This is a real-time chat application built with Next.js, Strapi, and Socket.io.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Strapi (Headless CMS)
- **Real-time Communication**: Socket.io

## Features

- Real-time messaging
- User authentication
- Persistent chat history
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```
   git clone # Real-time Chat App

This is a real-time chat application built with Next.js, Strapi, and Socket.io.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Strapi (Headless CMS)
- **Real-time Communication**: Socket.io

## Features

- Real-time messaging
- User authentication
- Persistent chat history
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/lalitkumarjangid/chat-app-.git
   cd chat-app
   ```

2. Install dependencies for the Next.js frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the Strapi backend:
   ```
   cd ../backend
   npm install
   ```

## Configuration

1. Set up your Strapi backend:
   - Follow the Strapi documentation to set up your content types and API endpoints.
   - Configure your database settings in `backend/config/database.js`.

2. Set up your Next.js frontend:
   - Create a `.env.local` file in the `frontend` directory with the following variables:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:1337
     NEXT_PUBLIC_SOCKET_URL=http://localhost:1337
     ```

3. Configure Socket.io:
   - In your Strapi backend, install the Socket.io plugin and configure it according to the documentation.

## Running the Application

1. Start the Strapi backend:
   ```
   cd backend
   npm run develop
   ```

2. In a new terminal, start the Next.js frontend:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the chat app.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
   cd chat-app
   ```

2. Install dependencies for the Next.js frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the Strapi backend:
   ```
   cd ../backend
   npm install
   ```

## Configuration

1. Set up your Strapi backend:
   - Follow the Strapi documentation to set up your content types and API endpoints.
   - Configure your database settings in `backend/config/database.js`.

2. Set up your Next.js frontend:
   - Create a `.env.local` file in the `frontend` directory with the following variables:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:1337
     NEXT_PUBLIC_SOCKET_URL=http://localhost:1337
     ```

3. Configure Socket.io:
   - In your Strapi backend, install the Socket.io plugin and configure it according to the documentation.

## Running the Application

1. Start the Strapi backend:
   ```
   cd backend
   npm run develop
   ```

2. In a new terminal, start the Next.js frontend:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the chat app.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
