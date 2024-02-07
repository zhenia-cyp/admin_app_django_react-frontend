export class Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  order_num: number | null;

  constructor(id = 0, title = '', description = '', image = '', price = 0, order_num = 0) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image = image;
      this.price = price;
      this.order_num = order_num;
  }
}