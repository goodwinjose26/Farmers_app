$(function () {
    GetFeedback()
})
function GetFeedback() {
    
    data = { "action": "getfeedback" }
    console.log(data)
    $.post("Model/view_feedback.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.product_name+ '</td>' +
                    '<td>' + v.bf_desc + '</td>' 
                    
                    
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}