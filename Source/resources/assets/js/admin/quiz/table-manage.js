$(function() {
    var user_id = $('#user_id').val();
    
    $('#quizListing').DataTable({
        processing: true,
        serverSide: true,
        dom: 'Bfrtip',
        stateSave: true,
        ajax: {
            url: APP.adminUrl + "datatable/quizProcessing/" + user_id,
            method:'POST',
            data: {'_token': window.Laravel.csrfToken}
        },
        columns: [{
                data: 'name'
            },{
                data: 'answer'
            }
        ],
        buttons: [
            $.extend( true, {}, null, {
                extend: 'excelHtml5',
                text: 'Export Excel',
                class: 'danger'
            })
        ]
    });
});