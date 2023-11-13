export default class User {
  constructor(id, username, email, password, name, phone, address) 
  {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = `${name.firstname} ${name.lastname}`;
    this.phone = phone;
    this.address = `${address.city}, ${address.street}, ${address.number}, ${address.zipcode}`;
    this.role = 'user' | 'admin';
    this.isDeleted = false;
  }
}
