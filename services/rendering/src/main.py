from fastapi import FastAPI, HTTPException, File, UploadFile
from PIL import Image, ImageDraw
import io

app = FastAPI()

# Placeholder function to simulate rendering of a 3D model
def render_placeholder(model_data: str) -> bytes:
    # Create a simple image with a placeholder rendering (example: a blank or basic image)
    img = Image.new('RGB', (200, 200), color='blue')
    draw = ImageDraw.Draw(img)
    draw.text((50, 90), "3D Model Render", fill='white')

    # Save image to a bytes buffer
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='PNG')
    img_bytes.seek(0)

    return img_bytes.getvalue()

@app.post("/render")
async def render_model(model_data: UploadFile = File(...)):
    try:
        # Read file data (this would normally be a 3D model)
        file_content = await model_data.read()
        rendered_image = render_placeholder(file_content)

        # Return the image as a response
        return {
            "status": "success",
            "message": "Rendering complete. This is a placeholder image.",
            "file_size": len(rendered_image)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
