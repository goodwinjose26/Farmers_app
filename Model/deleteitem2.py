#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")
if action == "delbook2":
    data = json.loads(form.getvalue("data"))
    sql ="delete from booking where booking_id= %s"
    res = conn.db.setValues(sql)
    print('{"success": 1}')    
