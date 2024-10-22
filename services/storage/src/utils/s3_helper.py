import boto3
from botocore.exceptions import NoCredentialsError

S3_BUCKET_NAME = "your-s3-bucket-name"

def upload_file_to_s3(file):
    s3 = boto3.client("s3")
    try:
        s3.upload_fileobj(file.file, S3_BUCKET_NAME, file.filename)
        return f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"
    except NoCredentialsError:
        return "Credentials not available"
