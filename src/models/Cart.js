export default class Cart {
  constructor ( id, userId, date, products) 
  {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.products = products;
    this.isDeleted = false;
  }
}
