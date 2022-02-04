$(document).ready(function(){
    $("#row").click(function(){
    var addctrl="<td><input type='text' class='form-control'></td>";
    $("table tr").append(addctrl);
});
});