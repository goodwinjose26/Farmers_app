#!c:\python\python
import cgi, cgitb, json, os

print("Content-type: text/html\n\n")

from lib import DBConnection as conn
from lib import SendMail as sm

cgitb.enable()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "selectAll":
    sql = "select product.product_id,category.cat_name,product.product_name,product.product_image,product.product_price,product.product_q from product,category where status=0 and category.cat_id=product.cat_id"
    res = conn.db.getJSON(sql)
    print(res)

        

         

