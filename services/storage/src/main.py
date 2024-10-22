from fastapi import FastAPI, UploadFile, File
from storage_service import save_to_local, save_to_s3

app = FastAPI()

@app.post("/upload/local")
async def upload_to_local(file: UploadFile = File(...)):
    file_location = await save_to_local(file)
    return {"status": "success", "path": file_location}

@app.post("/upload/s3")
async def upload_to_s3(file: UploadFile = File(...)):
    s3_url = await save_to_s3(file)
    return {"status": "success", "url": s3_url}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)
