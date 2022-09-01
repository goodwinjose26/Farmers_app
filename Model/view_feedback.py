#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getfeedback":
    #sql = "SELECT product.product_id,product.product_name,feedback.feedback_desc FROM `product`INNER JOIN feedback ON product.product_id = feedback.product_id "
    sql = "SELECT product.product_name,bookfeedback.bf_desc,booking.price from bookfeedback,booking,product WHERE booking.product_id=product.product_id and bookfeedback.book_id=booking.booking_id and booking.status=20"  

    res = c.db.getJSON(sql)
    print(res)