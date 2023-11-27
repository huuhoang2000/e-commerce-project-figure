export default class Product {
  constructor(id, title, price, category, description, image) 
  {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
    this.isDeleted = false;
  }
}
