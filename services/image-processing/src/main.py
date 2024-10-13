from fastapi import FastAPI, UploadFile, File
from PIL import Image
import io

app = FastAPI()

@app.post("/process-image")
async def process_image(file: UploadFile = File(...)):
    try:
        # Read the uploaded image file
        image_bytes = await file.read()
        
        # Open the image using Pillow
        image = Image.open(io.BytesIO(image_bytes))
        
        # Example processing: Convert image to grayscale
        grayscale_image = image.convert("L")
        
        # Save processed image (in-memory for now)
        processed_image_bytes = io.BytesIO()
        grayscale_image.save(processed_image_bytes, format="JPEG")
        
        # Get the size of the processed image
        processed_image_size = len(processed_image_bytes.getvalue())
        
        return {
            "filename": file.filename,
            "original_size": len(image_bytes),
            "processed_size": processed_image_size,
            "status": "Processed Successfully"
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
