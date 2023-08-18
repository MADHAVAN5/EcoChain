from flask import jsonify

from app import *

@app.route('/', methods = ['GET', 'POST'])
def home():
    data = "hello"
    return jsonify({'data': data})