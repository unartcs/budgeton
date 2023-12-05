export default class Budget {
  constructor(id, name, limit, used, items) {
    this.id = id;
    this.name = name;
    this.limit = limit;
    if (used) {
      this.used = used;
    } else this.used = 0;
    if (used) {
      this.items = items;
    } else this.items = [];
  }
  calculateItemPrices = () => {
    this.items.forEach((item) => {
      this.used += item.price;
    });
    return this.used;
  };
  addItem (item) {
    this.items.push(item);
  }
  removeItem = (item) => {
    let index = this.items.findIndex(item);
    this.items.slice(index, 1);
  };
}