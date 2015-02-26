var $form = $('form');
var $input = $('#to-do');

$form.on ('submit', function (eventObject) {
    
    eventObject.preventDefault();
    $theCircle.css('background-color', $input.val()); 
    
    var $theH2 = $('<h2>');
    $theH2.html($input.val())
    $theCircle.html($theH2);
    
    $input.val('');
    
});
