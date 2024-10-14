# Use Python slim image for efficiency
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code to the container
COPY src/ .

# Set the default command to run the inference service
CMD ["python", "inference.py"]
