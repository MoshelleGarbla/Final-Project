
//select the remove button
let removeButton = document.querySelector('.bi-dash-circle');
let table = document.querySelector('.table');

let selectRows = document.querySelector('.table').getElementsByTagName('tr');
let rowCount = selectRows.length;
console.log(rowCount);

//when clicking the button, delete all row

// removeButton.onclick = () =>{
//     for (let i=0; i < rowCount-1; i++){
//         table.deleteRow(1);
//     }
//     
// }

