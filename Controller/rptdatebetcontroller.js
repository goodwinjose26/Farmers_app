$(function () {
    $("#add_div").hide()
    $("#msg").hide()

    $("#myform").submit(function (e) {
        alert("test")
        e.preventDefault();
        if ($(this).valid()) {
            $("#add_div").hide()
            $("#msg").hide()
            
            data = {"date1":$("#fdate").val(),"date2":$("#todate").val()}
            data = { "action": "report" ,"data":JSON.stringify(data)}
            //data = { "action": "UserFlight" }
            $.post("Model/rptdatebetmodel.py", data,
                function (res) {
                    alert("helllo")
                    alert(res)
                    res = JSON.parse(res)
                    alert(res)
                    if(res.length>0){
                        $("#add_div").show()
                        $("#msg").hide()
                    x = 1
                    s = ''
                    $.each(res, function (k, v) {
                        s += '<tr>' +
                            '<td>' + x + '</td>' +
                            '<td>' + v.booking_date + '</td>' +
                            '<td>' + v.name + '</td>' +
                            '<td>' + v.product_name + '</td>' +
                            '<td>' + v.quantity + '</td>' +
                            '<td>' + v.price + '</td>' 
                        '</tr>'
                        x++
                    });
                    $("#tb").html(s)
                }else{
                    $("#add_div").hide()
                    $('#msg').show()
                }
                }
            );
        }
    });

})