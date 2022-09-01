$(function () {
    v = location.href.split("=")[2]
    $('#cid').val(v)

    data = { "action": "sendreply","id":v }
    $.post('Model/ad_sendreply.py', data, function (dt) {
        res = JSON.parse(dt)
        $.each(res, function (k, v) {
            $('#reply').val(v.reply_desc)
            $("option[value='"+v.question_id+"']").prop("selected",true)
         
          
           
            

        })
    })

    $('#myForm6').submit(function (e) {
        $('#msg').removeClass('alert-danger')
        $('#msg').text("")
        $(this).validate()
        e.preventDefault()
        if ($(this).valid()) {
            data = getFormData($("#myForm6"))
            data = { "data": data, "action": "updatereply" }
            $.post('Model/ad_sendreply.py', data, function (dt) {
                $('#msg').addClass('alert-danger')
                $('#msg').html("Updated !!!!")
                window.location="index.py?id=view_question";

            })
        }
    })
})