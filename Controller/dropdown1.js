$(function()
{
    data = { 'action': 'cat' }
    $.post('Model/dropdownitem.py', data, function(dt) {
    res=JSON.parse(dt)
    cd="<option value='' selected disabled> Select </option>"
    $.each(res,function(k,v){
       cd+='<option value="'+v.cat_id+'">'+v.cat_name+'</option>' 
    }) 
    $('#cname').html(cd)   
    })

})