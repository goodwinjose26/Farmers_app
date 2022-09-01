$(function(){
    $('#myForm7').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm7"))  
            user=localStorage.getItem("uid")
            //alert(data);
            data = { "data": data, "action": "faq","id":user }
            $.post('Model/question_cus.py', data, function(dt)
             {
                 if(dt)
                 {
                     //alert("Data Inserted Sucessfully");
                     console.log(dt);
                location.reload();
                 }
            })
        }
    })

    
})