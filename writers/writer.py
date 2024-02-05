import json

f = open("contetn.txt", "r")
vals = list(filter(None ,f.read().split('\n')))

questions = []
answers = []
correctAnswers = []

count = 0
tempList = []

for item in vals:
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
    if i >= 1000:
        print(question)
        print(answers[i])
    for answer in answers[i]:
        newAnswers.append(answer.split(". ")[1])
    tempList.append(newAnswers)
    tempList.append(newAnswers[correctAnswers[i]-1])
    mydict[i] = tempList

print(mydict)
f = open("content.json","w")
f.write(json.dumps(mydict))
f.close()
