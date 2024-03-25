#import os, sys, importlib
from flask import Flask, request
from flask_cors import CORS
from nlp.dict import *

app = Flask(__name__)
CORS(app)

@app.route("/test")
def index():
    return {"name":"John", "age":30}

@app.route("/read_dict")
def read():
    return read_dict()

@app.route("/add_dict", methods=['POST'])
def add_dict():
    try:
        word = request.form.get('word')
        add_dict2(word)
        return "done"
    except:
        return "error"

@app.route("/del_dict", methods=['POST'])
def delete():
    word = request.form.get('word')
    del_dict(word)
    return "done"



if __name__ =="__main__":
    app.run(debug=True)