$(function(){
    $('#myForm4').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm4"))  
            //alert(data);
            data = { "data": data, "action": "register" }
            $.post('Model/cus_register.py', data, function(dt)
             {
                 if(dt)
                 {
                     //alert("Data Inserted Sucessfully");
                     console.log(dt);
                //location.reload();
                window.location="indexcus.py?id=cus_login";
                 }
            })
        }
    })

    
})