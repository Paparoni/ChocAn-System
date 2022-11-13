//Generate random numbers for the ID
var GenerateID = () =>
{
    let n = new Uint16Array(1);
    window.crypto.getRandomValues(n);
    return n[0];
}
// Searches the user array for an instance with a matching id and returns that instance
var getMemberByID = (id) => {
    for(let i = 0; i < db.users.length; i++)
    {
        if (db.users[i].getId() == id)
        {
            return db.users[i];
            break;
        } 

    }
    throw new Error("Could not find a user with the id "+id);
}
// Same thing as getMemberByID but searches for a provider instead
var getServiceByID = (id) =>
{
    for(let i = 0; i < db.providers.length; i++)
    {
        if (db.providers[i].id == id)
        {
            return db.providers[i];
            break;
        }
    }
    throw new Error("Could not find a Provider with the id "+id);
}
// type: 0 for member, 1 for manager 2 for provider
class User {
    constructor(username, password, type) {
    this.username = username;
    this.password = password;
    this.type = type;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getType() {
        return this.type;
    }

    setUsername(username) {
        this.username = username;
    }
    setPassword(password)
    {
        this.password = password;
    }
}
// The member class
class Member extends User {
    constructor(username, password, name, address, city, state, zip){
        super(username, password)
        this.type = 0;
        this.id = GenerateID();
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.bookedServices = [];
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getCity() {
        return this.city;
    }
    getState(){
        return this.state;
    }
    getZip(){
        return this.zip;
    }
    getBookedServies(){
        return this.bookedServices;
    }
    setId(id){
        if(Number.isInteger(id))
        {
            this.id = id;
        } else 
        {
            throw new Error("ID must be an integer.");
        }
    }
    setName(name){
        if(typeof name == String)
        {
            this.name = name;
        } else 
        {
            throw new Error("Name must be a string.")
        }
    }
    setAddress(address){
        if(typeof address == String)
        {
            this.address = address;
        } else 
        {
            throw new Error("Address must be a string.")
        }
    }
    setCity(city){
        if(typeof city == String)
        {
            this.city = city;
        } else 
        {
            throw new Error("City must be a string.")
        }
    }
    setState(state){
        if(typeof state == String)
        {
            this.state = state;
        } else 
        {
            throw new Error("State must be a string.")
        }
    }
    setZip(zip){
        if(Number.isInteger(zip))
        {
            this.zip = zip;
        } else 
        {
            throw new Error("Zip must be an integer.");
        }
    }
    bookService(id)
    {
        this.bookedServices.push(getServiceByID(id));
    }

}
class Provider {
    constructor(id, name, fee)
    {
        this.id = id;
        this.name = name;
        this.fee = fee;
    }
}
// Manager/Operator class
class Manager extends User {
    constructor(username, password, id, name){
        super(username, password)
        this.type = 1;
        this.id = id;
        this.name = name;
    }
    addMember(name, address, city, state, zip){
        // Creates an instance of the member class and pushes it to our users array in database.js
        _member = new Member(name, address, city, state, zip);
        db.users.push[_member];
    }

    removeMember(id)
    {
        // filters the user array for an instance of the member class that has the matching id and replaces that array with an array without that instance
        db.users = db.users.filter(function(i){
            if (i.id == id){
                return true;
            }
        })
    }
}