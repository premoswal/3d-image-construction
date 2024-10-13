
---

# 3D Image Construction - Frontend

This is the frontend component of the 3D Image Construction project. It is built using **React** and serves as the user interface for interacting with the backend microservices. Users can upload 2D images, view the 3D constructed models, and interact with various features provided by the system.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface built with React
- Integration with backend microservices via API Gateway
- Real-time rendering of 3D models
- Responsive design for desktop and mobile devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/) (Optional for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3d-image-construction-frontend.git
   cd 3d-image-construction-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

1. Start the React development server:
   ```bash
   npm start
   ```

2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

This will generate a `build` directory containing the compiled static files.

## Environment Variables

Create a `.env` file at the root of the project and configure it as follows:
```
REACT_APP_API_URL=http://localhost:8080
```

This environment variable specifies the URL of the API Gateway. Adjust it as necessary for different environments.

## Project Structure

```
frontend/
├── public/                 # Static assets (HTML, icons)
├── src/                    # Source files
│   ├── components/         # Reusable UI components
│   ├── pages/              # React pages (e.g., Home, Upload)
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # NPM scripts and dependencies
└── Dockerfile              # Docker configuration
```

## Docker

You can build and run the frontend using Docker for consistent deployment.

1. **Build Docker Image:**
   ```bash
   docker build -t 3d-frontend .
   ```

2. **Run Docker Container:**
   ```bash
   docker run -p 3000:80 3d-frontend
   ```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---