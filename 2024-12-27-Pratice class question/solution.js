// Create a program for admin and user classes to view and edit data.

// Yashwant Kargwal
// Date : 27 / Dec / 2024

// Solution

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    data = "Secret Data";
    viewData() {
        console.log(this.data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        this.data = "Data is edited";
        User.data = this.data;
    }
}

let user1 = new User("Yashwant", "asd@gmail.com");
let user2 = new Admin("Yashwant", "xyz@gmail.com");

user1.viewData(); // Logs: Secret Data
user2.editData(); // Edits the data
user2.viewData(); // Logs: Data is edited
user1.viewData(); // Logs: Data is edited (after edit by user2)