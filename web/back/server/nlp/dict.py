import os

current_dir = os.path.dirname(__file__)
file_path = os.path.join(current_dir,'file/dict.txt')

def add_dict(newword):
    ##add = list((input("input: ").split(",")))
    newword = [x.strip(' ') for x in newword.split(",")]
    with open(file_path, 'a') as fp:
        for item in newword:
            fp.write("%s\n" % item)
        #print('Done')

def add_dict2(newword):
    newword = [x.strip(' ') for x in newword.split(",")]
    with open(file_path, 'r+') as fp:
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
            print("All words already exist in the dictionary.")

def del_dict(delword):
    #delword = delword.split(",")
    #delword = [x.strip(' ') for x in delword]
    if delword:
        delword = [x.strip(' ') for x in delword.split(",")]
        with open(file_path, "r") as fp:
            lines = fp.readlines()
        with open(file_path, "w") as fp:
            for item in lines:
                if item.strip("\n") not in delword:
                    fp.write(item)
    else:
        print("delword is empty")

def read_dict():
    list = []
    with open(file_path, 'r') as fp:
        for item in fp:
            x = item[:-1]
            list.append(x)
    #print(list)
    return list

#add_dict2("t1,t882,t1199")
#print(read_dict())