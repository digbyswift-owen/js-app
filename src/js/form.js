$(document).ready(function(){
    $("#name-form").submit(function(event){
        event.preventDefault();
        var form = $(this);
        url = form.attr('action');
        method = form.attr('method');
        $.ajax({
                type: method,
                url: url,
                data: form.serialize(),
                success: function(data){
                    alert(data);
                },
                error: function(error){
                    alert("Reached AJAX request, Error");
                }            
            })
        });
    })