function add() 
{
var mytable = document.getElementById("table");
var row =mytable.insertRow(-1);
//  var cell1 = row.insertCell(0);
//  var cell2 = row.insertCell(1);
row.insertCell(0).innerHTML=document.getElementById('name').value
row.insertCell(1).innerHTML=document.getElementById('email').value
row.insertCell(2).innerHTML=document.getElementById('age').value

var food= document.getElementsByClassName('foodq');
 for(i=0;i<food.length;i++)
 {
        if (food[i].checked) 
        row.insertCell(3).innerHTML =food[i].value;  
        
 }
 var foo= document.getElementsByClassName('foodqs');
 for(i=0;i<foo.length;i++)
 {
        if (foo[i].checked) 
        row.insertCell(4).innerHTML =foo[i].value;  
        
 }
 row.insertCell(5).innerHTML=document.getElementById('dropdown').value;

 row.insertCell(6).innerHTML='<button id="btnEdit" style="color:red " onclick="deleteRow(this)"> Delete </button>';
      document.getElementById('name').value='';
      document.getElementById('email').value='';
      document.getElementById('age').value='';
      document.getElementsByClassName('foodq').value='';
      document.getElementsByClassName('foodqs').value='';
      document.getElementsById('dropdown').value='';
}
function deleteRow(r) {
      var i = r.parentNode.parentNode.rowIndex;
      document.getElementById("table").deleteRow(i);
    }
 //  //    a+=1;
//      document.getElementById('name').value='';
//      document.getElementById('email').value='';
//      document.getElementById('age').value='';
//      document.getElementsByClassName('foodq').value='';
//      document.getElementsByClassName('foodqs').value='';
//      document.getElementsById('dropdown').value='';
     
//      // document.location='tab.html'
     
//      else
//      {
//          alert('please fill correct details in all fields.....')
//      }

// row.insertCell(3).innerHTML=document.getElementsByClassName('foodq').value;
//  for(i=0;i<food.length;i++)
//  {
//         if (food[i].checked) 
//         row.insertCell(3).innerHTML =food[i].value;  
        
//  }
// row.insertCell(4).innerHTML=document.getElementsByClassName('foodqs').value;
//  for(i=0;i<foo.length;i++)
//  {
//         if (foo[i].checked) 
//         row.insertCell(4).innerHTML =foo[i].value;  
        
//  }
 //row.insertCell(5).innerHTML=document.getElementById('dropdown').value;


// row.insertCell(0).innerHTML=name;
// row.insertCell(1).innerHTML=email;
// row.insertCell(2).innerHTML=number; 

 
//  function removeRow(oButton) {
//     var empTab = document.getElementById('table');
//     empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
// }