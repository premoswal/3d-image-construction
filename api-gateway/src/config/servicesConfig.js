const services = {
    imageProcessing: process.env.IMAGE_PROCESSING_URL || 'http://localhost:5001',
    modelInference: process.env.MODEL_INFERENCE_URL || 'http://localhost:5002',
    rendering: process.env.RENDERING_URL || 'http://localhost:5003',
    storage: process.env.STORAGE_URL || 'http://localhost:5004'
};

module.exports = { services };
