// Retrieve the database
var db = JSON.parse(localStorage.getItem("db"));
$( document ).ready( () => {
    $('#welcome').text('Welcome to the Member Dashboard, '+ db.currentUser.name.split()[0]);
});