$(document).ready(function() {
    $('#notie-success').on('click', function() {
        notie.alert(1, 'Success!', 2);
    });

    $('#notie-warning').on('click', function() {
        notie.alert(2, 'Warning<br><b>with</b><br><i>HTML</i><br><u>included.</u>', 2);
    });

    $('#notie-error').on('click', function() {
        notie.alert(3, 'Error.', 2);
    });

    $('#notie-info').on('click', function() {
        notie.alert(4, 'Information.', 2);
    });

    $('#notie-confirm').on('click', function() {
        notie.confirm('Are you sure you want to do that?<br><b>That\'s a bold move...</b>', 'Yes', 'Cancel', function() {
            notie.alert(1, 'Good choice!', 2);
        });
    });

    $('#notie-input').on('click', function() {
        notie.input('Please enter your email address:', 'Submit', 'Cancel', 'email', 'name@example.com', function(value_entered) {
            notie.alert(1, 'You entered: ' + value_entered, 2);
        });
    });
});
