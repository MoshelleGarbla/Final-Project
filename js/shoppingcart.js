
//Trying to delete table rows when click on the - button but fail 


//select the remove button
//let removeButton = document.getElementsByClassName("bi-dash-circle")[1];
// let removeButton = document.querySelectorAll(".bi-dash-circle");
// let table = document.querySelector('.table');

// let selectRows = document.querySelectorAll('.table-row');
// let rowCount = selectRows.length;
// console.log(rowCount);

// //when clicking the button, delete all row

// removeButton.onclick = () =>{
//     for (let i=0; i < rowCount-1; i++){
//         table.deleteRow(1);
//     }
    
// }

//when click anywhere on the table, it delete the second row
// for (let i = 0; i < removeButton.length; i++){
    
//     removeButton[i].onclick = () =>{
//         table.deleteRow(1);
//     }   
//     console.log(i);

// }



//Code is inspired by https://stackoverflow.com/questions/6473111/add-delete-table-rows-dynamically-using-javascript
function deleteRow(row) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    document.querySelector('.table').deleteRow(rowIndex);
}
  
  

