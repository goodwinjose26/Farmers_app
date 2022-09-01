$(function () {
    v = location.href.split("=")[2]
    $('#cid').val(v)

    data = { "action": "viewitem","id":v }
    $.post('Model/edititemupdatemodel.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#cname').val(v.product_name)
            $('#pprice').val(v.product_price)
            //$('#q').val(v.product_q)
            $("option[value='"+v.product_id+"']").prop("selected",true)
         
          
           
            

        })
    })
    $('#myForm6').submit(function (e) {
        alert("hiii")

        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm6"))
            alert(data)
            q=4
            user=localStorage.getItem("uid")
            data = { "data": data, "action": "bookitemcheck" }
            $.post('Model/bookchek.py', data, function (dt) {
                alert(dt)
                dt = JSON.parse(dt)
                s = ""
                $.each(dt, function (k, v) {
        
alert(v.product_q)    
if(v.product_q<q)
{
    alert("insuffient")
}
                })

            })

            
      

            data = { "data": data, "action": "bookitem","id":user }
            alert(data)
            $.post('Model/book.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("BOOKED SUCCESFULLY!!!!!!")
                window.location="indexcus2.py?id=view_booking";
            })
      
        }

    
    })


})





