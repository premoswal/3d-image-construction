# Image Processing Service

This service is responsible for processing uploaded 2D images. It allows users to upload images, which the service then processes and returns information about the image.

## Features

- Upload an image for processing.
- Convert uploaded images to grayscale.
- Return details about the original and processed images.

## Prerequisites

- **Docker**: Ensure Docker is installed on your machine.
- **Python 3.9+**: Required for local development.

## Directory Structure

```plaintext
image-processing/
├── Dockerfile
├── requirements.txt
├── src/
│   ├── main.py
│   ├── utils/          //if required
│   └── handlers/       //if required
└── config/             //if required

```

## Setup Instructions

### 1. Clone the Repository

If you haven't already, clone the repository containing the microservices.

```bash
git clone <your-repository-url>
cd 3d-image-construction/services/image-processing
```

### 2. Build the Docker Image

Build the Docker image using the following command:

```bash
docker build -t image-processing-service .
```

### 3. Run the Docker Container

Run the Docker container and map port `8000` on the host to port `8000` in the container:

```bash
docker run -p 8000:8000 image-processing-service
```

### 4. Access the API

The service will be available at `http://localhost:8000`. You can use tools like Postman or curl to interact with the API.

### 5. Testing the Image Processing Endpoint

To test the image processing functionality, use the following `curl` command:

```bash
curl -X POST http://localhost:8000/process-image -F "file=@<path-to-your-image-file>"
```

Replace `<path-to-your-image-file>` with the path to an actual image file on your system.

#### Example Response

```json
{
  "filename": "test-image.jpg",
  "original_size": 123456,
  "processed_size": 78901,
  "status": "Processed Successfully"
}
```

## Dependencies

The following libraries are used in this service:

- **FastAPI**: For creating the web API.
- **Uvicorn**: ASGI server for serving FastAPI applications.
- **Pillow**: Python Imaging Library for image processing tasks.

## Contributing

1. Fork the repository and clone your fork.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.