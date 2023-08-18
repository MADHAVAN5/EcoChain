from flask import jsonify, request
import numpy as np
import tensorflow as tf

from app import *

@app.route('/', methods = ['POST'])
def home():
    model = tf.keras.models.load_model("models/weekPrediction.h5", compile=False)
    data = request.json['data']
    print(data)
    test = np.array([12.31,7.44,5.23,5.65,4.67,6.75,9.34]).astype(np.float32)
    pred = model.predict(test.reshape(1,7))
    return jsonify({'data': pred})