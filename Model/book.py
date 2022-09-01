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

if action == "viewitem":
    sql = "select * from product where product_id = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "bookitem":
    data = json.loads(form.getvalue("data"))
    vuser=form.getvalue("id")
    sql ="insert into booking values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    vals =(None,Current_Date,vuser,data['cid'],data['q'],data['total'],0,None,None,0)
    res = conn.db.setValues(sql, vals)
    sql1 ="update product set product_q=product_q-%s where product_id=%s"
    vals1=(data['q'],data['cid'])
    res = conn.db.setValues(sql1, vals1)

    print('{"success": 1}')

    


        
  






    

         

