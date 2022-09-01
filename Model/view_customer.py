#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getitem":
    sql = "select  name,email,place,phone_no from customer b"
    res = c.db.getJSON(sql)
    print(res)