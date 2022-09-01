$(function(){
    
    $('#myForm4').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm4"))  
            //alert(data);
            data = { "data": data, "action": "getbookingdetails" }
            $.post('Model/shipmentreport.py', data, function(dt)
             {
                dt = JSON.parse(dt)
               // window.location.href = "afterIndexAdmin.py?id=bookingdetails"
                 if(dt)
                 {
                     //alert(dt); 
                     $("#ts").show()
                     $.each(dt, function (k, v) {
                         s = '<tr><td>' + v.booking_date + '</td>' +
                         '<td>' + v.name + '</td>' +
                         '<td>' + v.product_name + '</td>' +
                         '<td>' + v.quantity + '</td>' +
                         '<td>' + v.price + '</td>' +
                         '<td>' + v.ship_date + '</td>' 

                             
         
                              
                                 
                         $("#stds").append(s)
                         
                     })
                     $('#mainContent').html(s)
                     // alert("Data Inserted Sucessfully");
                     console.log(dt);
                //location.reload();
                
                 }
            })
        }
    })

    
})