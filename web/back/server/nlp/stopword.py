import os

current_dir = os.path.dirname(__file__)
file_path = os.path.join(current_dir,'file/stopword.txt')


def add_stopword(newword):
    newword = [x.strip(' ') for x in newword.split(",")]
    with open(file_path, 'r+',encoding="utf8") as fp:
        existing_words = set(fp.read().splitlines())
        #new_words = []
        #for word in newword:
        #    if word not in existing_words:
        #        new_words.append(word)
        new_words = [word for word in newword if word not in existing_words]
        if new_words:
            for item in new_words:
                fp.write("%s\n" % item)
        else:
            print("All words already exist in the stopword.")

def del_stopword(delword):
    #delword = delword.split(",")
    #delword = [x.strip(' ') for x in delword]
    if delword:
        delword = [x.strip(' ') for x in delword.split(",")]
        with open(file_path, "r",encoding="utf8") as fp:
            lines = fp.readlines()
        with open(file_path, "w",encoding="utf8") as fp:
            for item in lines:
                if item.strip("\n") not in delword:
                    fp.write(item)
    else:
        print("delword is empty")

def read_stopword():
    list = []
    with open(file_path, 'r', encoding="utf8") as fp:
        for item in fp:
            x = item[:-1]
            list.append(x)
    #print(list)
    return list

#add_stopword2("t1,t882,t1199")
#print(read_stopword())