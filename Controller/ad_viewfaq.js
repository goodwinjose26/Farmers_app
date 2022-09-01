$(function () {
    GetFeedback()
})
function GetFeedback() {
    
    data = { "action": "getquestion" }
    console.log(data)
    $.post("Model/ad_viewfaq.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.name + '</td>' +
                    '<td>' + v.question_desc + '</td>' +
                    '<td>' + v.reply_desc + '</td>' +
                    '<td>' +  "<a href='?id=send_reply&id2=" + v.question_id + "' class='btn btn-success app'>REPLY</a> &nbsp;&nbsp;&nbsp;"+'</td>'           
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}