from pythainlp.corpus.common import thai_words
from pythainlp.util import Trie
from pythainlp import word_tokenize

import json

text = "คดีสืบเนื่องมาจากศาลชั้นต้นพิพากษาว่าจำเลยมีความผิดตามประมวลกฎหมายอาญา มาตรา 326, 328 พระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ.2550 มาตรา 14 (4) การกระทำของจำเลยเป็นความผิดหลายกรรม ให้ลงโทษทุกกรรมเป็นกระทงความผิดไปตามประมวลกฎหมายอาญา มาตรา 91 วางโทษฐานหมิ่นประมาทโดยการโฆษณา จำคุก 2 เดือน และปรับ 20,000 บาท ฐานนำเข้าสู่ระบบคอมพิวเตอร์ซึ่งข้อมูลคอมพิวเตอร์ใด ๆ ที่มีลักษณะอันลามก จำคุก 2 เดือน และปรับ 20,000 บาท รวมจำคุก 4 เดือน และปรับ 40,000 บาท"

##print("default dictionary:", word_tokenize(text))

new_words = {"ILO87", "การร่วมเจรจาต่อรอง", "สิทธิในการรวมตัว", "เสรีภาพในการสมาคม", "แรงงานสัมพันธ์"}


##new_words.add("ILO98")
words = new_words.union(thai_words())

custom_dictionary_trie = Trie(words)
print("custom dictionary :", word_tokenize(text, custom_dict=custom_dictionary_trie, keep_whitespace=False))