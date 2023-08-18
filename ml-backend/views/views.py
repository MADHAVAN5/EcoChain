from flask import jsonify, request
import numpy as np
import tensorflow as tf

from app import *

@app.route('/', methods = ['GET', 'POST'])
def home():
    model = tf.keras.models.load_model("models/weekPrediction.h5", compile=False)
    data = request.json['data']
    test = np.array(data).astype(np.float32)
    pred = model.predict(test.reshape(1,7))
    return jsonify({'data': pred.tolist()})