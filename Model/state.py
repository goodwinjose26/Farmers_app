#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="state":
    data=json.loads(form.getvalue("data"))
    sql="insert into state values(%s,%s)"
    vals=(None,data['name'])
    result=c.db.setValues(sql,vals)
    print(result)
elif action=="districtd":
    sql="select * from state"
    res=c.db.getJSON(sql)
    print(res)
elif action=="hospitalh":
    sql="select * from state"
    res=c.db.getJSON(sql)
    print(res)
