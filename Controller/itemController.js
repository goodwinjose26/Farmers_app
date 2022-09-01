$(function(){
    $('#myForm4').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data1=new FormData()
            data1.append('name',$('#name').val())
            data1.append('id',$('#cname').val())
            data1.append('price',$('#pprice').val())
            data1.append('pq',$('#q').val())
            data1.append('img', $('#productimage')[0].files[0]);
           
            data1.append("action","register")
            $.ajax({
                url:"Model/product.py",data:data1,type:'POST',contentType: false,
                cache: false,
                processData: false,
                success: function(dt) {
                    
                    
                        //alert("Data Inserted Sucessfully");
                        //alert(dt);
                        console.log(dt);
                        location.reload();
                        window.location="index.py?id=view_item";

                    
                }
            })
        }
    })

    
})