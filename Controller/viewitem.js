var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/viewitem.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            s += "<div><h6><span>Product Category</span>: " + v.cat_name + "</div>"
            s += "<div><h5><span>Product Name</span>: " + v.product_name + "</div>"

            v1 = "<img src='uploads/" + v.product_id + "." + v.product_image + "' width '150px' height='150px'/>"
            s += v1
            s += "<div><h5><span>Product Price</span>: " + v.product_price + "</div>"
            s += "<div><h5><span>Product Quantity</span>: " + v.product_q + "</div>"
           
            s += "<div class='text-center'>"
            s += "<a href='#' id='"+v.product_id+"' class='btn  btn-sm btn-outline-danger del'>Remove</a> &nbsp;&nbsp;&nbsp;"
            s += "<a href='?id=edit_item&id1=" + v.product_id + "' class='btn btn-sm btn-outline-success cart' id='" + v.product_name+ "'>Edit</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
        $('.del').click(function (e) {
            e.preventDefault()
            if (confirm("Delete This Product ? ")) {
                v = $(this).attr('id')
                data = { "id": v }
                data = JSON.stringify(data)
                data = { "data": data, "action": "delitem" }
                $.post('Model/deleteitem.py', data, function (dt) {
                    showDetails()
                })
            }
        })
    })
}

$(function () {
    showproducts()

})