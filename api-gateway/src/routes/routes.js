const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { services } = require('../config/servicesConfig');

const router = express.Router();

// Proxy requests to Image Processing Service
router.use('/image-processing', createProxyMiddleware({
    target: services.imageProcessing,
    changeOrigin: true
}));

// Proxy requests to Model Inference Service
router.use('/model-inference', createProxyMiddleware({
    target: services.modelInference,
    changeOrigin: true
}));

// Proxy requests to Rendering Service
router.use('/rendering', createProxyMiddleware({
    target: services.rendering,
    changeOrigin: true
}));

// Proxy requests to Storage Service
router.use('/storage', createProxyMiddleware({
    target: services.storage,
    changeOrigin: true
}));

module.exports = router;
