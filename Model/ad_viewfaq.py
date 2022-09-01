#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getquestion":
    sql = "SELECT customer.cust_id,customer.name,question.question_desc,question.reply_desc,question.question_id FROM `customer`INNER JOIN question ON customer.cust_id = question.customer_id"
    res = c.db.getJSON(sql)
    print(res)