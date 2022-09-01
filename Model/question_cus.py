#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="faq":
    data=json.loads(form.getvalue("data"))
    vuser=form.getvalue("id")
    sql="insert into question values(%s,%s,%s,%s,%s)"
    print(sql)
    vals=(None,vuser,None,data['faq'],None)
    result=c.db.setValues(sql,vals)
    print(result)
