class ItemController {
    constructor(currentID = 0){
        this.currentID= currentID;
        this.itemArray = [];
    }
    addItem(productName, description, imageUrl, productType, size, price){
        let newItem= {
            id: this.currentID++,
            productName,
            description,
            imageUrl,
            productType,
            size,
            price
        }
        this.itemArray.push(newItem);
        

    }
}