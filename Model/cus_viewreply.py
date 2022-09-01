#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getreply":
    #data = json.loads(form.getvalue("data"))
    v=form.getvalue("id")
    #sql = "SELECT customer.cust_id,customer.name,question.question_desc,question.reply_desc FROM `customer`INNER JOIN question ON customer.cust_id = question.customer_id "
    sql = "SELECT customer.cust_id,customer.name,question.question_desc,question.reply_desc FROM `customer`INNER JOIN question ON customer.cust_id = question.customer_id where question.customer_id='%s'" %v
    res = c.db.getJSON(sql)
    print(res)