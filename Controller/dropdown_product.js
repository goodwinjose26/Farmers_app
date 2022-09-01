$(function()
{
    data = { 'action': 'pro' }
    $.post('Model/dropdownproduct.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.product_id+'">'+v.product_name+'</option>' 
    }) 
    $('#pname').html(cd)   
    })

})