#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm
import datetime

cgitb.enable()
Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "bookitemcheck":
    data=json.loads(form.getvalue("data"))
    sql = "select product_q from product where product_id =%s"%data['cid']
    res = conn.db.getJSON(sql)
    print(res)


    


        
  






    

         

