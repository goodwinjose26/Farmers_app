#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getbooking":
    d=form.getvalue("id")
    sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.booking_id,booking.quantity,booking.price from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id where booking.status=2 and booking.ref_status=1 and booking.cust_id='%s'" %d 
    res = c.db.getJSON(sql)
    print(res)
elif action == "refund":
    sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.booking_id,booking.quantity,booking.price from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id where booking.status=2 and booking.ref_status=0"
    res = c.db.getJSON(sql)
    print(res)   


  