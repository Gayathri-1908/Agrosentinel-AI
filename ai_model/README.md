# Tomato Leaf Disease AI Model

## Model
- Framework: TensorFlow / Keras
- Model file: `tomato_leaf_mobilenetv3.keras`
- Input size: `224 x 224 x 3`
- Output classes: 10

## Important Preprocessing

The model already contains a Rescaling layer.

Therefore, **DO NOT divide the input image by 255.0 before prediction.**

Input:
- Resize image to `224 x 224`
- Keep 3 RGB channels
- Pass the image directly to the model

## Classes

1. Tomato___Bacterial_spot
2. Tomato___Early_blight
3. Tomato___Late_blight
4. Tomato___Leaf_Mold
5. Tomato___Septoria_leaf_spot
6. Tomato___Spider_mites Two-spotted_spider_mite
7. Tomato___Target_Spot
8. Tomato___Tomato_Yellow_Leaf_Curl_Virus
9. Tomato___Tomato_mosaic_virus
10. Tomato___healthy

Class names are also provided in:
`class_names.json`

## Model Performance

Test Accuracy: approximately 92.7%

## Grad-CAM

Grad-CAM is supported for visual explanation.

Last convolutional layer:
`activation_17`

Grad-CAM heatmap size:
`7 x 7`

The model can provide:
- Predicted disease
- Confidence score
- Grad-CAM heatmap
- Grad-CAM overlay

## Example Prediction

Input:
Tomato leaf image

Output:
Disease: Tomato___Septoria_leaf_spot
Confidence: 98.33%

## Files

- `tomato_leaf_mobilenetv3.keras` — trained disease classification model
- `class_names.json` — mapping of output indices to disease names
- `README.md` — integration information