#!c:\python\python
import cgi, cgitb, json, os

print("content-type: text/html\n\n")
from lib import Sessions as sess
from lib import DBConnection as conn
# from lib import SendMail as sm
import datetime

cgitb.enable()
Current_Date = datetime.datetime.today()
form = cgi.FieldStorage()
action = form.getvalue("action")

if action == "view":
    d=form.getvalue("id")
    sql = "select left(booking.booking_date,10) booking_date,customer.name,product.product_name,booking.booking_id,booking.quantity,booking.price,left(booking.ship_date,10) ship_date,left(booking.deli_date,10) deli_date from customer INNER JOIN (booking INNER JOIN product ON product.product_id=booking.product_id) ON customer.cust_id=booking.cust_id where (booking.status=5 or booking.status=6) and booking.cust_id='%s'" %d  
    res = c.db.getJSON(sql)
    print(res)

elif action == "feedback":
    data = json.loads(form.getvalue("data"))
    vuser=form.getvalue("id")
    sql ="insert into bookfeedback values(%s,%s,%s,%s)"
    vals =(None,vuser,data['cid'],data['feedback'])
    res = conn.db.setValues(sql, vals)
    sql1 ="update booking set status=%s where booking_id= %s"
    vals1=(20,data['cid'])
    res = conn.db.setValues(sql1, vals1)


    print('{"success": 1}')   
   

   

        
  






    

         

