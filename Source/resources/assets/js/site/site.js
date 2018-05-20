var APP = APP || {};

$(document).ready(function () {
    $("#quiz").steps({
        headerTag: "h3",
        bodyTag: "section",
        titleTemplate: '<span class="number"><label>#index#</label></span>',
        transitionEffect: "slideLeft",
        autoFocus: true,
        enablePagination: false,
        onInit: function (event, currentIndex) {
            var errorMsg = '<div class="errorMsg"></div>';
            $(".content ").append(errorMsg);
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            var errorMsg = 'Please select any one option.';
            $(".errorMsg ").text("");
            if(currentIndex == 0) {
                var rdoVal = $("input:radio[name='option[0]']:checked").val();
                if( rdoVal == undefined){
                    $(".errorMsg ").text(errorMsg);
                    return false;
                } else {
                    return true;
                }
            } else if(currentIndex == 1){
                var rdoVal = $("input:radio[name='option[1]']:checked").val();
                if( rdoVal == undefined){
                    $(".errorMsg ").text(errorMsg);
                    return false;
                } else {
                    return true;
                }
            } else if(currentIndex == 2){
                var rdoVal = $("input:radio[name='option[2]']:checked").val();
                if( rdoVal == undefined){
                    $(".errorMsg ").text(errorMsg);
                    return false;
                } else {
                    return true;
                }
            } else if(currentIndex == 3){
                var rdoVal = $("input:radio[name='option[3]']:checked").val();
                if( rdoVal == undefined){
                    $(".errorMsg ").text(errorMsg);
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }
    });
    
    $(document).on('click', '.next-quiz', function(e) {
        e.preventDefault();
        $("#quiz").steps('next');
    });
    
    $('.next').on('click', function(e){
        e.preventDefault();
        var nextId = $(this).attr('href');
        $(this).closest('section').hide();
        $(nextId).show();
    });

    $('#quizComplete').on('click', function(){
        var errorMsg = 'Please select any one option.';
        var rdoVal = $("input:radio[name='option[4]']:checked").val();
        
        if(rdoVal == undefined) {
            $(".errorMsg").text(errorMsg);
            return false;
        } else {
            $(".errorMsg").text("");
            $("#quizForm").submit();
            return true;
        }
    });
});