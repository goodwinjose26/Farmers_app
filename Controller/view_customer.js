$(function () {
    GetCustomer()
})
function GetCustomer() {
    
    data = { "action": "getitem" }
    console.log(data)
    $.post("Model/view_customer.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.name + '</td>' +
                    '<td>' + v.email + '</td>' +
                    '<td>' + v.place + '</td>' +
                    '<td>' + v.phone_no + '</td>' 
                    
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}