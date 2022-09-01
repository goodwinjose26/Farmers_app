$(function () {
    v = location.href.split("=")[2]
    $('#cid').val(v)

    data = { "action": "payment","id":v }
    $.post('Model/cus_payment.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#cname').val(v.price)
            //$('#pprice').val(v.product_price)
            //$('#q').val(v.product_q)
            $("option[value='"+v.booking_id+"']").prop("selected",true)
         
          
           
            

        })
    })

    $('#myForm6').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm6"))
            //user=localStorage.getItem("uid")
            data = { "id": v }
            data = JSON.stringify(data)
            data = {"data":data, "action": "bookpayment"}
            console.log(v)
            $.post('Model/cus_payment.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("PAYMENT SUCCESFULLY!!!!!!")
                window.location="indexcus2.py?id=mybooking";
            })
        }
    })
})



