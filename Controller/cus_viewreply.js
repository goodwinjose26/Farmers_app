$(function () {
    Getreply()
})
function Getreply() {
    user=localStorage.getItem("uid")
    data = { "action": "getreply","id":user }
    //alert(user)
    //alert(data)
    console.log(data)
    $.post("Model/cus_viewreply.py", data, function (res) {
        res = JSON.parse(res)
        console.log(res)
        //alert(res)
        if (res != null) {
            $("#tb").show()
            $.each(res, function (k, v) {
                s = '<tr><td>' + v.name+ '</td>' +
                    '<td>' + v.question_desc + '</td>' +
                    '<td>' + v.reply_desc + '</td>' 
                    
                    
                $("#stds").append(s)
            })
        } else {
            
         
        }
    })
}