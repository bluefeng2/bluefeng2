from flask import Flask, request
import sqlite3
from sqlite3 import Error
from flask_cors import CORS, cross_origin

def create_connection(path):
    connection = None
    try:
        connection = sqlite3.connect(path, check_same_thread=False)
        print("Connection to SQLite DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

def get_info(targetUsername):
    cursor_info = connection.cursor()
    info = cursor_info.execute("SELECT username, password, corQ, totQ FROM main WHERE username = ?",(targetUsername,)).fetchall()
    cursor_info.close()
    if info == []:
        return "no account"
    else:
        return info

def add_acc(username, password):
    cursor_add = connection.cursor()
    cursor_add.execute("INSERT INTO main VALUES ('"+username+"', '"+password+"', 0, 0)")
    cursor_add.close()
    connection.commit()

def check_creds(username, password):
    cursor_checkcreds = connection.cursor()
    info = cursor_checkcreds.execute("SELECT password FROM main WHERE username = ?",(username,)).fetchall()
    cursor_checkcreds.close()
    if info != []:
        if info[0][0] == password:
            return True
        else:
            return False

def check_exists(username):
    info = cursor.execute("SELECT password FROM main WHERE username = ?",(username,)).fetchall()
    if info != []:
        return True
    else:
        return False

def update_info(username, password, corQ, totQ):
    if check_creds(username, password):
        delete_account(username, password)
        cursor_updateInfo = connection.cursor()
        cursor_updateInfo.execute("INSERT INTO main VALUES ('"+username+"', '"+password+"', "+str(corQ)+", "+str(totQ)+")")
        cursor_updateInfo.close()
        connection.commit()

def wipe():
    cursor_wipe = connection.cursor()
    cursor_wipe.execute("DELETE FROM main")
    cursor_wipe.close()
    connection.commit()

def delete_account(username, password):
    if 1:
        cursor_delete = connection.cursor()
        cursor_delete.execute("DELETE FROM main WHERE username = ?", (username,)).fetchall()
        cursor_delete.close()
        connection.commit()

connection = create_connection('sm_app.sqlite')

cursor = connection.cursor()
#cursor.execute("CREATE TABLE main (username TEXT, password TEXT, corQ INTEGER, totQ INTEGER)")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def webpage():
    return 'api'

@app.route('/test', methods = ['POST'])
def test():
    content = request.json

    return content["username"]

@app.route('/wipe', methods = ['POST'])
def deleteEverything():
    wipe()
    return "wipted"

@app.route('/update', methods = ['POST'])
def update():
    content = request.json

    update_info(content["username"], content["password"], content["corQ"], content["totQ"])
    return get_info(content["username"])

@app.route('/deleteAcc', methods = ['POST'])
def deleteAcc():
    content = request.json

    delete_account(content["username"], content["password"])

    return "Completed"

@app.route('/newAcc', methods = ['POST'])
def newAcc():
    content = request.json
    if check_exists(content["username"]) == False:
        add_acc(content["username"], content["password"])

        return get_info(content["username"])
    else:
        return "already exists"

@app.route('/login', methods = ['POST'])
def login():
    content = request.json

    if check_creds(content["username"], content["password"]):
        return get_info(content["username"])
    else:
        return "Wrong"

@app.route('/getInfo', methods = ['POST'])
def getInfo():
    content = request.json

    return get_info(content["username"])


app.run(host="0.0.0.0", port=5167)
