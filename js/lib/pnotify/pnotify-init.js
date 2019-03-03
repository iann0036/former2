PNotify.prototype.options.styling = "bootstrap3";

$(document).ready(function() {
    $('#pn-simple').on('click', function() {
        new PNotify('Check me out! I\'m a notice.');
    });

    $('#pn-regular').on('click', function() {
        new PNotify({
            title: 'Regular Notice',
            text: 'Check me out! I\'m a notice.',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-glyphicon').on('click', function() {
        new PNotify({
            title: 'Bootstrap Icon',
            text: 'I have an icon that uses the Bootstrap icon styles.',
            icon: 'glyphicon glyphicon-envelope',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-custom-icon').on('click', function() {
        new PNotify({
            title: 'Custom Icon',
            text: 'I have an icon that uses the Bootstrap icon styles.',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-no-icon').on('click', function() {
        new PNotify({
            title: 'No Icon Notice',
            text: 'I have no icon.',
            icon: false
        });
    });

    $('#pn-info').on('click', function() {
        new PNotify({
            title: 'New Thing',
            text: 'Just to let you know, something happened.',
            type: 'info',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-success').on('click', function() {
        new PNotify({
            title: 'Regular Success',
            text: 'That thing that you were trying to do worked!',
            type: 'success',
            icon: 'font-icon font-icon-check-circle',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-danger').on('click', function() {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            type: 'error',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-warning').on('click', function() {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon'
        });
    });

    $('#pn-purple').on('click', function() {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon alert-purple'
        });
    });

    $('#pn-white').on('click', function() {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon alert-white'
        });
    });

    $('#pn-grey').on('click', function() {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            icon: 'font-icon font-icon-warning',
            addclass: 'alert-with-icon alert-grey'
        });
    });
});
