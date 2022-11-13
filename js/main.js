
$(() => {
    // Handle Login Button Click event
    $('#loginButton').on('click', function(e) {
        // If the login is successful set the current user to the logged in user then store the database in localStorage
        if(login($('#username').val(), $('#password').val()))
        {
            db.currentUser = login($('#username').val(), $('#password').val());
            window.localStorage.setItem("db", JSON.stringify(db));
            // Check the users type and send them to the appropriate dashboard.
            switch(db.currentUser.type)
            {
                case 0:
                    window.open('member_dashboard.html','_self',false)
                    break;
                case 1:
                    break;
                case 2:
                    break
                default:
                    bootbox.alert("Something went wrong.");
            }
        }

    });
});