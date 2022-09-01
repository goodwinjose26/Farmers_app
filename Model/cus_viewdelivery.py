#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "delivery":
    d=form.getvalue("id")
    sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.booking_id,booking.quantity,booking.price,left(booking.ship_date,10) ship_date,left(booking.deli_date,10) deli_date from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id where (booking.status=5 or booking.status=6 or booking.status=20) and booking.cust_id='%s'" %d  
    res = c.db.getJSON(sql)
    print(res)



  