# 3D Image Construction Microservices

This directory contains the microservices required for 3D image construction. Each service is self-contained, with its own code, dependencies, and Docker configuration. The services communicate with each other through an API Gateway.

## Services Overview

1. **Image Processing Service**
   - Responsible for preprocessing 2D images, such as resizing, filtering, and feature extraction.
   - Runs on port `8000`.

2. **Model Inference Service**
   - Generates a 3D model from processed 2D images using machine learning models.
   - Runs on port `8001`.

3. **Rendering Service**
   - Takes the 3D model data and produces a rendered image or video output.
   - Runs on port `8002`.

4. **Storage Service**
   - Manages storing and retrieving data (e.g., images, models) to/from local storage or cloud (e.g., S3).
   - Runs on port `8003`.

## Prerequisites

- **Docker**: Make sure Docker is installed on your machine.
- **Python 3.9+**: Ensure Python is installed if you're developing without Docker.
- **Postman/cURL**: Useful for testing APIs locally.

