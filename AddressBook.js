class AddressBookSystem{


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
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name Should contain one upper case and min 3 chars';    
    }

    get lastName() { return this._lastName;}
    set lastName(lastName) {
        let lastNAmeRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNAmeRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name Should contain one upper case and min 3 chars';    
    }

    get address() { return this._address;}
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address Should contain at least 4 chars';    
    }

    get city() { return this._city;}
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City Name Should contain at least 4 chars';    
    }

    get state() { return this._state;}
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State Name Should contain at least 4 chars';  
    }

    get zip() { return this._zip;}
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip code Should contain exact 6 digits'; 
    }

    get phoneNumber() { return this._phoneNumber;}
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number Should contain exact 10 digits'; 
    }

    get email() { return this._email;}
    set email(email) {
        let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
        if(emailRegex.test(email))
            this._email = email;
        else throw 'Email should be in the proper format'; 
    }

    toString(){
        return "FirstName = " +this.firstName+ ", LastName = "+this.lastName+ ", Address = "+this.address+", City = "+this.city+
                ", State = "+this.state+", ZipCode = "+this.zip+", Phone Number = "+this.phoneNumber+", Email id = "+this.email;
    }
}

let addressBookContact = new AddressBookSystem("Rajesh", "Gupta", "vilashNagar", "Bhuj", "Gujarat", 396230, 9999888789, "rajesh@yahoo.com");
console.log(addressBookContact.toString());
try{
    addressBookContact.firstName = "john";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.lastName = "jonas";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.address = "vir";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.city = "sil";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.state = "guj";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.zip = 2345;
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.phoneNumber = 98097656;
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}
try{
    addressBookContact.email = "yashyahoo.com";
    console.log(addressBookContact.toString());
} catch (e) {
    console.error(e);
}

let newAddressBook = new Array();
let contact1 = new AddressBookSystem("Viraj", "Dongre", "ghanshyamNagar", "surat", "gujarat", 333222, 9878543367, "viraj@gmail.com");
newAddressBook.push(addressBookContact);
newAddressBook.push(contact1);
console.log("The new address book contacts are : "+newAddressBook.toString());

newAddressBook.forEach(entries => {
    if(entries.firstName === "Viraj"){
        entries.city = "Bharuch"; 
    }
});
console.log("Updated output is : "+newAddressBook.toString());

// const prompt = require('prompt-sync')();
// let name = prompt ("Enter any number");
// console.log(name);