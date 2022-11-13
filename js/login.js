// returns true or false whether a username exists already or not
var usernameExists =  (username) => {
        // search db for matching username
        for(let i = 0; i < db.users.length; i++)
        {
           if ( db.users[i].getUsername() == username )
           {
            return true;
            break;
           }
        }
        return false;
}
// Searches for matching username and password, if matching username and password is found returns the user object.
var login = (username, password) =>
{
    if(usernameExists(username))
    {
        for(let i = 0; i < db.users.length; i++)
        {
           if ( db.users[i].getUsername() == username )
           {
                if (db.users[i].getPassword() == password)
                {
                    return db.users[i];
                    break;
                }
           }
        }
        bootbox.alert("User found, but password is incorrect.")
        return false;
    } else {
        bootbox.alert("No user with that username found.");
        return false;
    }
}