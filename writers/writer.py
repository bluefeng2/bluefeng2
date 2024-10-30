import json

f = open("D:\\Users\\lingf\\OneDrive\\Desktop\\bluefeng2.github.io\\writers\\contetn.txt", "r")
vals = list(filter(None ,f.read().split('\n')))

questions = []
answers = []
correctAnswers = []

count = 0
tempList = []

for i, item in enumerate(vals):
    if item[0] == "*":
        item = item[2:]
    if item[1] == "." or item[2] == "." or item[3] == ".":
        questions.append(item.strip())
    else:
        count+=1
        if item[-1] == "*":
            correctAnswers.append(count)
            item = item.split("*")[0]
        tempList.append(item.strip())
        if count == 4:
            answers.append(tempList)
            tempList = []
            count = 0
            

f.close()
mydict = {}
for i,question in enumerate(questions):
    tempList=[question]
    newAnswers = []
    for answer in answers[i]:
        try:
            newAnswers.append(answer.split(". ")[1])
        except:
            print(i)
    tempList.append(newAnswers)
    tempList.append(newAnswers[correctAnswers[i]-1])
    mydict[i] = tempList

with open("content.json","w") as f:
    f.write(json.dumps(mydict))
    f.flush()
    f.close()
print(json.dumps(mydict))
