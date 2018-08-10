(document).ready(function(){

    var btnShareB = $('.btnShare2');
    var btnShareA = $('.btnShare4');

    $('.btnShare').on('click', function(){
        btnShareA.show();
        btnShareB.hide();
        $(this).children('.btnShare4').hide();
        $(this).children('.btnShare2').css('display','flex');
    });

    $('.btnShare5').on('click', function(){
        event.stopPropagation();
        btnShareA.show();
        btnShareB.hide();
    });

});
