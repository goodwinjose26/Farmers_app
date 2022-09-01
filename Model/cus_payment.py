#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "payment":
    sql = "select price from booking where booking_id = %s"% form.getvalue("id")
    res = conn.db.getJSON(sql)
    print(res)
elif action == "bookpayment":
    data = json.loads(form.getvalue("data"))
    sql ="update booking set status=%s where booking_id= %s"
    vals =(1,data["id"])
    res = conn.db.setValues(sql, vals)
    sql1 ="update product set product_q=product_q-%s where product_id=%s"
    vals1=(data['q'],data['cid'])
    res = conn.db.setValues(sql1, vals1)
    print('{"success": 1}')



  
