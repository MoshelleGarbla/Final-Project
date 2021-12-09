const item = new ItemController();

let itemRows= document.getElementById("itemRows");
let addItemBtn= document.getElementById("addItemButton");

addItemBtn.addEventListener("click", function(event){
    event.preventDefault();
    let itemProductName = document.getElementsById("itemProductName");
    let itemDrescription= document.getElementsById("itemDescription");
    let itemImageUrl= document.getElementsById("itemImageUrl");
    let itemProductType= document.getElementsById("itemProductType");
    let itemSize= document.getElementsById("itemSize");
    let itemPrice= document.getElementsById("itemPrice");

    item.addItem(itemProductName.value, itemDrescription.value, itemImageUrl.value, itemProductType.value, itemSize.value, itemPrice.value);
    let newItem = {
        productName: itemProductName.value,
        description: itemDrescription.value,
        imageUrl: itemImageUrl.value,
        productType: itemProductType.value,
        size: itemSize.value,
        price: itemPrice.value
    };
    addNewItem(newItem);

    itemProductName.value= "";
    itemDrescription.value= "";
    itemImageUrl.value= "";
    itemProductType.value= "";
    itemSize.value= "";
    temPrice.value= "";

    console.log(item.itemArray);

})