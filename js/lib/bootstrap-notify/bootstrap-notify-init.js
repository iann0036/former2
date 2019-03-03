$(document).ready(function() {
    $('#bn-basic').on('click', function() {
        $.notify("Hello World");
    });

    $('#bn-passing-title').on('click', function() {
        $.notify({
            title: "Welcome:",
            message: "This plugin has been provided to you by Robert McIntosh aka mouse0270"
        });
    });

    $('#bn-passing-html').on('click', function() {
        $.notify({
            title: "<strong>Welcome:</strong> ",
            message: "This plugin has been provided to you by Robert McIntosh aka <a href=\"https://twitter.com/Mouse0270\" target=\"_blank\">@mouse0270</a>"
        });
    });

    $('#bn-url').on('click', function() {
        $.notify({
            message: "Check out my twitter account by clicking on this notification!",
            url: "https://twitter.com/Mouse0270"
        });
    });

    $('#bn-font-icon').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            message: "You're not limited to just Bootstrap Font Icons"
        });
    });

    $('#bn-glyphicon').on('click', function() {
        $.notify({
            icon: 'glyphicon glyphicon-star',
            title: 'Title',
            message: "Everyone loves font icons! Use them in your notification!"
        });
    });

    $('#bn-center').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            placement: {
                align: "center"
            }
        });
    });

    $('#bn-bottom').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            placement: {
                from: "bottom"
            }
        });
    });

    $('#bn-success').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-check-circle',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'success'
        });
    });

    $('#bn-warning').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'warning'
        });
    });

    $('#bn-danger').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'danger'
        });
    });

    $('#bn-info').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'purple'
        });
    });

    $('#bn-white').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'white'
        });
    });

    $('#bn-grey').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Heads up!</strong>',
            message: 'You can use any of bootstraps other alert styles as well by default.'
        },{
            type: 'grey'
        });
    });


});
