$(function() {
    var buttonCommon = {
        exportOptions: {
            columns: ':not(.notForPrint)'
        }
    };

    $('#userListing').DataTable({
        processing: true,
        serverSide: false,
        searching: false,
        order: [[ 1, "desc" ]],
        dom: 'Bfrtip',
        stateSave: true,
        ajax: {
            url: APP.adminUrl + "datatable/userProcessing",
            method:'POST',
            data: {'_token': window.Laravel.csrfToken}
        },
        columns: [{
            data: 'id'
        },{
            data: 'name'
        },{
            data: 'email'
        },{
            data: 'state'
        },{
            data: 'city'
        },{
            data: 'zip'
        },{
            data: 'quiz_completed',
            render: function(data, type, row){
                if(data) {
                    return 'Yes';
                } else {
                    return 'No';
                }
            }
        },{
            data: 'quiz_result'
        },{
            data: 'image',
            render: function(data, type, row) {
                var str = '';
                
                if(data) {
                    str =
                        '<a href="' + data + '" target="_blank">' +
                        '<img src="' + data + '" class="img-responsive"/>' +
                        '</a><span style="display:none">' + data + '</span>';
                } else {
                    str = '<img src="http://placehold.it/255x100?text=No%20Image"/>';
                }
                
                return str;
            }
        },{
            data: 'id',
            sortable: false,
            render: function(data, type, row) {
                var detailButton = '';
                var quizButton = '';
                var str = '';   
                
                detailButton += '<a href="' + APP.adminUrl + 'user/' + data +'">' +
                    '<button type="button" class="btn btn-info btn-xs">' +
                    '<i class="glyphicon glyphicon-info-sign"></i>' +
                    '&nbsp; Details' +
                    '</button>' +
                    '</a>';

                quizButton += '<a href="' + APP.adminUrl + 'user/' + data +'/quiz">' +
                    '<button type="button" class="btn btn-warning btn-xs">' +
                    '<i class="glyphicon glyphicon-info-sign"></i>' +
                    '&nbsp; Quiz' +
                    '</button>' +
                    '</a>';
                
                str = detailButton + '<br><br>' + quizButton;
                
                return str;
            }
        }
        ],
        buttons: [
            $.extend( true, {}, buttonCommon, {
                extend: 'excelHtml5',
                text: 'Export Excel',
                class: 'danger'
            })
        ]
    });
});