$(function(){
    $('#myForm1').submit(function(e){
        e.preventDefault()
        
        $(this).validate()
        // if ($('#passwd').val() != $('#cpasswd').val()) {
        //     $('#msg').addClass('alert-danger')
        //     $('#msg').html("Password not matching !!!!")
        // } else 
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('name',$('#brandname').val())
            data1.append('img', $('#brandimage')[0].files[0]);
            data1.append("action","register");
            
            $.ajax({
                url:"Model/brand.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    //alert("Data Inserted Sucessfully");
                    location.reload();

                   console.log(dt);
                        
                    
                }
            })
        }
    })

    
})