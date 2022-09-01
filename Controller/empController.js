$(function(){
    $('#myForm1').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm1"))  
            //alert(data);
            data = { "data": data, "action": "employee" }
            $.post('Model/emp.py', data, function(dt)
             {
                 if(dt)
                 {
                     //alert("Data Inserted Sucessfully");
                     console.log(dt);
                //location.reload();
                 }
            })
        }
    })

    
})