#import os, sys, importlib
from flask import Flask, request
from flask_cors import CORS

from nlp.dict import *
from nlp.model import extract
from nlp.regex import regex_date, regex_party

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

@app.route('/extract', methods=['GET', 'POST'])
def extraction():
    text = request.form.get('text')
    #text = "ทดสอบ"\
    ex_date = regex_date(text)
    ex_party = regex_party(text)
    result = extract(text, ex_date, ex_party)
    #print(result)
    return result
    




if __name__ =="__main__":
    app.run(debug=True)