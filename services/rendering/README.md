# Rendering Service

The **Rendering Service** is a microservice responsible for rendering 3D models. It processes input data (e.g., 3D model files) and returns a rendered output. Currently, it uses a placeholder rendering function that generates a simple image. This setup allows you to test the service architecture without needing complex rendering dependencies.

## Features

- Accepts 3D model data (as files) via HTTP POST requests.
- Generates a placeholder rendered image as a response.
- Ready for expansion with more sophisticated rendering logic.

## Prerequisites

- **Docker**: Ensure Docker is installed on your system.
- **Python 3.9+**: Only required if running outside Docker.
- **Dependencies**: Listed in `requirements.txt`.

## Project Structure

```plaintext
services/rendering/
├── Dockerfile          # Docker configuration for containerizing the service
├── requirements.txt    # Python dependencies for the service
└── src/
    └── main.py         # Main application code for the rendering service
```
## Setting Up and Running the Service

### 1. Build the Docker Image

To build the Docker image for the **Rendering Service**, run the following command:

```bash
cd services/rendering
docker build -t rendering-service .
```

### 2. Run the Docker Container

After building the image, start the service by running:

```bash
docker run -p 8002:8002 rendering-service
```

### 3. Test the Service

You can test the service using `curl` or Postman. The service accepts file uploads, simulating a 3D model input:

#### Example with `curl`:

```bash
curl -X POST http://localhost:8002/render -F "model_data=@test-file.txt"
```

This will send a file named `test-file.txt` as the input, and the service will return a response with a placeholder message and file size.

## Code Explanation

### `main.py`

The `main.py` file contains the core logic for the **Rendering Service**:

- **FastAPI** is used to set up a simple web server that accepts POST requests.
- The `render_placeholder` function generates a simple image (a placeholder).
- Future updates can replace the placeholder function with actual 3D rendering logic.

### `Dockerfile`

The `Dockerfile` sets up a lightweight Python environment:
- Installs dependencies from `requirements.txt`.
- Copies the source code into the container.
- Runs the FastAPI application using `uvicorn`.

### `requirements.txt`

Contains the list of Python packages needed:
```plaintext
fastapi
uvicorn
pillow
```

## Expanding the Service

Currently, the service uses a simple placeholder function. To integrate actual 3D rendering:

1. Replace `render_placeholder` with rendering logic that can process 3D model files.
2. Update `requirements.txt` to include any new dependencies needed for your rendering library.
3. Test and deploy!

## Contributing

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature/your-feature`).
3. **Commit** your changes (`git commit -m 'Add new feature'`).
4. **Push** to the branch (`git push origin feature/your-feature`).
5. **Open** a Pull Request.
