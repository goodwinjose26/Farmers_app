#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action=="register":

  fileitem = form["img"]
  name = form.getvalue("name")

  sql1 = "select ifnull(max(product_id),0)+1 b_id from product"
  cnid = json.loads(c.db.getJSON(sql1))
  cnid = cnid[0]["b_id"]
  if fileitem.filename:

    fn = os.path.basename(fileitem.filename)
    fn = fn.split(".")
    fn = fn[len(fn)-1]
    sql = "insert into product values(%s, %s, %s)"
    vals = (cnid,name,fn)
    result = c.db.setValues(sql, vals)
    #print(rowCnt)
    print(result)
    fn = "%s.%s" % (cnid,fn)
    open("../uploads/" + fn, "wb").write(fileitem.file.read()) 
     
  
    
