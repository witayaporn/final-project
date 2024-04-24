from pythainlp.corpus.common import thai_words
from pythainlp.util import Trie
from pythainlp import word_tokenize

import json
from .dict import *


def extract(text):
    #text = "คดีสืบเนื่องมาจากศาลชั้นต้นพิพากษาว่าจำเลย"

    ##print("default dictionary:", word_tokenize(text))

    new_words = {"ILO87", "การร่วมเจรจาต่อรอง", "สิทธิในการรวมตัว", "เสรีภาพในการสมาคม", "แรงงานสัมพันธ์"}

    dict = set(read_dict())

    ##new_words.add("ILO98")
    words = dict.union(thai_words())

    custom_dictionary_trie = Trie(words)
    #print("custom dictionary :", word_tokenize(text, custom_dict=custom_dictionary_trie, keep_whitespace=False))
    result = word_tokenize(text, custom_dict=custom_dictionary_trie, keep_whitespace=False)
    return result

#extract("ทดสอบ")