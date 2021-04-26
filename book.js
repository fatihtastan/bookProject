let nameBook = document.querySelector("#name");
let author = document.querySelector("#author");
let status = document.querySelector("#status");
let submit = document.querySelector(".submit");
submit.addEventListener("click", addOneBook);
let givenId = 0;
let defaultData = [];

function Book(id, name, author, status){
    this.name = name
    this.id = id
    this.author = author
    this.status = status
}
// !nameBook.value.match(regex) || !author.value.match(regex)
function addOneBook(){
    var regex = /^[A-Za-z]+$/ ; 
    if(nameBook.value ==="" || author.value ===""  ){
        alert("Please write someting into the input!");
    } 
    else{
        let bookNew = new Book(givenId, nameBook.value, author.value, status.value );
defaultData.push(bookNew);
givenId++;
createAllElement(bookNew);
    }
   // input içlerini silme
        nameBook.value = "";
        author.value = "";
        status.value ="Read";
    
}

renderAll();
function renderAll(){
    defaultData.forEach(book => createAllElement(book));
}
function createAllElement(book){
    const tr = document.createElement("tr");

    // Tüm stringler için tr içine td oluşturacağız!
 for(let key in book){
     if( key !== "id" && key !== "status"){
    let td = document.createElement("td"); 
    td.innerText = book[key]
    tr.appendChild(td);
  }
 }
 // Read NotRead Buttonu yapma
 const statusButton = document.createElement("button");
 statusButton.classList.add("btn", "btn-info");
statusButton.innerText = book.status;
statusButton.addEventListener("click", () => {
    book.status = (book.status === "Read") ? "Not Read" : "Read";
    statusButton.innerText = book.status;
})
 let statusButtonTd = document.createElement("td");
 statusButtonTd.appendChild(statusButton);
 tr.appendChild(statusButtonTd);

// Delete Butonu oluşturup Tr elemanlarının her birini silebilmeli
const deleteButton = document.createElement("button");
deleteButton.classList.add("btn", "btn-info");
deleteButton.innerText = "Delete";
let deleteButtonTd = document.createElement("td");
deleteButtonTd.appendChild(deleteButton);
tr.appendChild(deleteButtonTd);

deleteButton.addEventListener("click", () => {
    let deleteConfirm = confirm("Do you want to delete?");
    if(deleteConfirm){
        tr.remove();
 let newArray=[];
for(let i=0; i<defaultData.length; i++){
    if(defaultData[i].id != book.id){
        newArray.push(defaultData[i]);
    }
   }
}
 
 defaultData = newArray;
});
