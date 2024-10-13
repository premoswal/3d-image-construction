
---

# API Gateway

The API Gateway serves as the central entry point for client requests in the 3D Image Construction microservice architecture. It handles routing, forwarding requests to various microservices, and can be extended to include features like authentication, rate limiting, and logging.

## Features
- Centralized routing for microservices
- Simple request forwarding using `http-proxy-middleware`
- Easy configuration via environment variables
- Containerized using Docker for easy deployment

## Project Structure
```
api-gateway/
├── Dockerfile
├── package.json
├── .env
├── src/
│   ├── index.js           # Main entry point
│   ├── routes/
│   │   └── routes.js      # Service route definitions
│   ├── middlewares/       # Optional middlewares (e.g., authentication)
│   └── config/
│       └── servicesConfig.js  # Configuration for service URLs
```

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm**
- **Docker** (optional, for containerization)

### Installation
1. Clone the repository and navigate to the `api-gateway` directory:
   ```bash
   git clone <repository-url>
   cd 3d-image-construction/api-gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration
Create a `.env` file in the `api-gateway` directory and configure service URLs:
```
PORT=8080
IMAGE_PROCESSING_URL=http://localhost:5001
MODEL_INFERENCE_URL=http://localhost:5002
RENDERING_URL=http://localhost:5003
STORAGE_URL=http://localhost:5004
```

### Running the API Gateway
To start the server locally:
```bash
npm start
```

The server should now be running at `http://localhost:8080`.

### Using Docker
1. **Build the Docker image**:
   ```bash
   docker build -t api-gateway .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 8080:8080 --env-file .env api-gateway
   ```

### Available Routes
- `/image-processing`: Routes to the Image Processing Service
- `/model-inference`: Routes to the Model Inference Service
- `/rendering`: Routes to the Rendering Service
- `/storage`: Routes to the Storage Service

## Extending the API Gateway
The API Gateway can be extended to include additional functionality:
- **Authentication**: Add middleware to `middlewares/` for handling token-based authentication.
- **Rate Limiting**: Implement rate limiting to control the flow of requests.
- **Logging**: Integrate logging solutions like Winston or Morgan for monitoring.

---