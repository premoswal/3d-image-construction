# Storage Service

The Storage Service is responsible for storing and retrieving images, 3D models, and other assets. It supports both local storage and cloud storage using Amazon S3.

## Features

- Upload files to local storage on the server.
- Upload files to Amazon S3 cloud storage.
- Easily configurable for different storage backends.

## Prerequisites

- **Docker**: Make sure Docker is installed on your machine.
- **AWS Credentials** (if using S3):
  - Set up your AWS Access Key ID and Secret Access Key. You can configure this using the `aws configure` command or by setting environment variables.
- **Python 3.9+** (if running without Docker):
  - Make sure Python is installed if you plan to run the service locally without Docker.

## Directory Structure

```plaintext
storage/
├── Dockerfile
├── requirements.txt
├── src/
│   ├── main.py
│   ├── storage_service.py
│   └── utils/
│       └── s3_helper.py
└── config/
    └── config.yaml

```

## Configuration

To use Amazon S3, make sure your AWS credentials are properly set up. You can set them as environment variables:

```bash
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
```

Or, add them to a configuration file.

## Building and Running the Service

### Using Docker

1. **Build the Docker Image**:
   ```bash
   docker build -t storage-service .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -p 8003:8003 storage-service
   ```

### Without Docker (Locally)

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Service**:
   ```bash
   python src/main.py
   ```

## API Endpoints

### 1. Upload to Local Storage

- **Endpoint**: `/upload/local`
- **Method**: `POST`
- **Description**: Uploads a file to the local storage directory on the server.
- **Example**:
  ```bash
  curl -X POST http://localhost:8003/upload/local -F "file=@test-image.jpg"
  ```

### 2. Upload to Amazon S3

- **Endpoint**: `/upload/s3`
- **Method**: `POST`
- **Description**: Uploads a file to the configured Amazon S3 bucket.
- **Example**:
  ```bash
  curl -X POST http://localhost:8003/upload/s3 -F "file=@test-image.jpg"
  ```

## Environment Variables

The following environment variables can be set for configuration:

- `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Access Key.
- `AWS_DEFAULT_REGION`: The AWS region where your S3 bucket is located.

## Testing

After starting the service, you can test it using `curl` commands or Postman. Examples have been provided above for each endpoint.

## Deployment

For deploying to a cloud platform, make sure to adjust the environment variables and storage configurations to match your cloud provider's setup.

## Contributing

1. Fork the repository and clone your fork.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.