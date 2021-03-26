class AddressBookSystem{
    //Property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() { return this._firstName;}
    set firstName(firstName) {this._firstName = firstName;}

    get lastName() { return this._lastName;}
    set lastName(lastName) {this._lastName = lastName;}

    get address() { return this._address;}
    set address(address) {this._address = address;}

    get city() { return this._city;}
    set city(city) {this._city = city;}

    get state() { return this._state;}
    set state(state) {this._state = state;}

    get zip() { return this._zip;}
    set zip(zip) {this._zip = zip;}

    get phoneNumber() { return this._phoneNumber;}
    set phoneNumber(phoneNumber) {this._phoneNumber = phoneNumber;}

    get email() { return this._email;}
    set email(email) {this._email = email;}

    toString(){
        return "FirstName = " +this.firstName+ ", LastName = "+this.lastName+ ", Address = "+this.address+", City = "+this.city+
                ", State = "+this.state+", ZipCode = "+this.zip+", Phone Number = "+this.phoneNumber+", Email id = "+this.email;
    }
}

let addressBookContact = new AddressBookSystem("Rajesh", "Gupta", "Sector 12", "Silvassa", "DNH", 396230, 9999888789, "rajesh@yahoo.com");
console.log(addressBookContact.toString());