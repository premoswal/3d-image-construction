FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install required packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY src/ .

# Set environment variables if needed (e.g., AWS credentials)
# ENV AWS_ACCESS_KEY_ID=<your-access-key>
# ENV AWS_SECRET_ACCESS_KEY=<your-secret-key>

# Expose the port the service will run on
EXPOSE 8003

# Run the application
CMD ["python", "main.py"]
