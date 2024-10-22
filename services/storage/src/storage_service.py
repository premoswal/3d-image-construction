import os
from fastapi import UploadFile
from utils.s3_helper import upload_file_to_s3

LOCAL_STORAGE_PATH = "/app/storage_files"

async def save_to_local(file: UploadFile):
    if not os.path.exists(LOCAL_STORAGE_PATH):
        os.makedirs(LOCAL_STORAGE_PATH)
    file_location = f"{LOCAL_STORAGE_PATH}/{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())
    return file_location

async def save_to_s3(file: UploadFile):
    s3_url = upload_file_to_s3(file)
    return s3_url
