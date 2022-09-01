$(function () {
    GetBooking()
})


function GetBooking() {
    
    data = { "action": "getbooking"}
    console.log(data)
    $.post("Model/view_booking.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.booking_date + '</td>' +
                    //'<td>' + v.booking_id + '</td>' +
                    '<td>' + v.name + '</td>' +
                    '<td>' + v.product_name + '</td>' +
                    '<td>' + v.quantity + '</td>' +
                    '<td>' + v.price + '</td>' +
                    '<td>' +  "<a href='#' id='"+v.booking_id+"' class='btn  btn-sm btn-outline-danger del'>Shippment</a> &nbsp;&nbsp;&nbsp;"
                    //'<td>' +  "<a href='?id=view_payment&id1=" + v.booking_id +"' class='btn btn-success app' id='" + v.product_name+ "'>PAYMENT</a> &nbsp;&nbsp;&nbsp;"+'</td>' 
                $("#stds").append(s)
            })
            $('#mainContent').html(s)
            $('.del').click(function (e) {
                e.preventDefault()
                if (confirm("Ship this product!!!")) {
                    v = $(this).attr('id')
                    data = { "id": v }
                    data = JSON.stringify(data)
                    data = { "data": data, "action": "shippment" }
                    $.post('Model/shippment.py', data, function (dt) {
                        location.reload();
                        showDetails()
                    })
                }
            })            
        } else {                     
        }      
    })
}
