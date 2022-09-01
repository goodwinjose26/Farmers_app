#!c:\python\python
from lib import DBConnection as c
import cgi, cgitb,json,os
print("Content-type: text/html\n\n")
cgitb.enable()
form = cgi.FieldStorage()
action=form.getvalue("action")
if action == "getbookingdetails":
    #sql = "select left(booking.Bdate,10) Bdate,user.uname,employee.pname,booking.quantity,booking.total from user INNER JOIN (booking INNER JOIN employee ON employee.pid=booking.pid) ON user.u_id=booking.vuser where booking.Bdate between 2022-05-25 and 2022-05-26 and booking.status=1"

    data = json.loads(form.getvalue("data"))
    sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.quantity,booking.price,left(booking.ship_date,10) ship_date from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id where booking.deli_date between %s and %s"
    vals =(data["from"],data["to"])
    res = c.db.getJSON(sql,vals)
    print(res)

