export class Contact {
    name = "";
    lastName = "";
    conected = false;

    constructor(name, lastName, conected) {
        this.name = name;
        this.lastName = lastName;
        this.conected = conected
    };
};

export default Contact;