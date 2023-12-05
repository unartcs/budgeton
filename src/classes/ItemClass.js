export default class Item {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity
        this.total = getTotal()
        function getTotal() {
            return price*quantity
        }
    }
}