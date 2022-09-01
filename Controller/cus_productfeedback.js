$(function () {
    v = location.href.split("=")[2]
    $('#cid').val(v)

    data = { "action": "viewm","id":v }
    $.post('Model/u.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#cname').val(v.product_name)
            $('#pprice').val(v.product_price)
            //$('#q').val(v.product_q)
            $("option[value='"+v.product_id+"']").prop("selected",true)
         
          
           
            

        })
    })

    $('#myForm6').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm6"))
            user=localStorage.getItem("uid")
            data = { "data": data, "action": "feedback","id":user }
            $.post('Model/cus_feedback.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Feedback submited!!!!!!")
                //window.location="indexcus2.py?id=view_booking";
            })
        }
    })
})





