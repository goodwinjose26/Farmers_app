#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="category":
    data=json.loads(form.getvalue("data"))
    sql="insert into category values(%s,%s,%s)"
    print(sql)
    vals=(None,data['cat_name'],data['cat_desc'])
    result=c.db.setValues(sql,vals)
    print(result)
