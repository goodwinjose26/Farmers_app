var showproducts = function () {
    data = { "action": "selectAll" }
    $.post('Model/cus_viewproduct.py', data, function (dt) {
        dt = JSON.parse(dt)
        s = ""
        $.each(dt, function (k, v) {

            s += "<div class='box col-lg-3'>"
            s += "<div><h6><span>Product Category</span>: " + v.cat_name+ "</div>"
            s += "<div><h5><span>Product Name</span>: " + v.product_name + "</div>"

            v1 = "<img src='uploads/" + v.product_id + "." + v.product_image + "' width '150px' height='150px'/>"
            s += v1
            s += "<div><h5><span>Product Price</span>: " + v.product_price + "</div>"
           
            s += "<div class='text-center'>"
           
            s += "<a href='?id=cus_login&id1=" + v.product_id + "' class='btn btn-sm btn-outline-success cart' id='" + v.product_name+ "'>BOOK</a>"
            s += "</div><br>"
            s += "</div>"
        })
        $('#mainContent').html(s)
     
    })
}

$(function () {
    showproducts()

})