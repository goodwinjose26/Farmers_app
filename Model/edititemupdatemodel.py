#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "viewitem":
    sql = "select * from product where product_id = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "updateitem":
    data = json.loads(form.getvalue("data"))
    sql ="update product set product_name=%s,product_price=%s,product_q=%s where product_id= %s"
    vals =(data["cname"],data["pprice"],data['q'],data["cid"])
    res = conn.db.setValues(sql, vals)
    print('{"success": 1}')




        

         

