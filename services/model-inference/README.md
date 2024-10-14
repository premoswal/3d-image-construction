# Model Inference Service

The Model Inference Service is responsible for generating predictions based on input data, using a machine learning model. This service is built using FastAPI and can be containerized using Docker.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Directory Structure](#directory-structure)
- [Setup and Running](#setup-and-running)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Docker Container](#running-the-docker-container)
- [API Endpoints](#api-endpoints)
  - [POST /predict](#post-predict)
- [Testing](#testing)
- [Extending the Service](#extending-the-service)

## Prerequisites

- **Docker**: Ensure Docker is installed on your machine.
- **Python 3.9+**: Required for local development without Docker.
- **ML Framework**: This service uses PyTorch by default but can be adapted to other frameworks (e.g., TensorFlow, Scikit-Learn).

## Directory Structure

```plaintext
model-inference/
├── Dockerfile           # Docker configuration file
├── requirements.txt     # Python dependencies
├── src/                 # Source code
│   ├── inference.py     # Main application code
│   ├── utils/           # Utility functions (placeholder)
│   └── handlers/        # Request handlers (placeholder)
└── config/              # Configuration files (placeholder)

```

## Setup and Running

### Building the Docker Image

Navigate to the `model-inference` directory and build the Docker image:

```bash
cd services/model-inference
docker build -t model-inference-service .
```

### Running the Docker Container

After building the image, you can run the service using:

```bash
docker run -p 8001:8001 model-inference-service
```

The service will be available at `http://localhost:8001`.

## API Endpoints

### POST /predict

- **Description**: Takes input data and returns a prediction from the ML model.
- **URL**: `http://localhost:8001/predict`
- **Method**: `POST`
- **Request Body**:
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "image_data": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    }
    ```
- **Response**:
  - Content-Type: `application/json`
  - Example:
    ```json
    {
      "prediction": [[0.035, 0.085]]
    }
    ```

## Testing

You can test the service using `curl` or Postman.

### Example Using `curl`

```bash
curl -X POST http://localhost:8001/predict \
-H "Content-Type: application/json" \
-d '{"image_data": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}'
```

If the service is running correctly, you should receive a response with prediction data.

## Extending the Service

1. **Replace the Placeholder Model**:
   - Modify `inference.py` to load and use your trained model.
   - Update the `load_model` function to load the model file from `config/` or a specific directory.

2. **Add More Endpoints**:
   - Extend the FastAPI app to include additional endpoints if needed (e.g., `/train`, `/status`).

3. **Change Input Data Structure**:
   - Update the `InferenceRequest` model in `inference.py` to match your actual input data format.

