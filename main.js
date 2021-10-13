const shilf_1=document.getElementById("shilf1"),
        shilf_2=document.getElementById("shilf2"),
        shilf_3=document.getElementById("shilf3"),
        libaryContiner=document.getElementById("libaryContiner"),
        addForm=document.getElementById("addForm")

let books = [
    {
        title: "The Phantom Tollbooth",
        author: "Norton Juster",
        image: "https://img.thriftbooks.com/api/images/s/f47992e83e792655620183f8c5fe092c1e4d5a70.jpg"
    },
    {
        title: "Le Petit Prince",
        author: "Antoine de Saint-",
        image: "https://img.thriftbooks.com/api/images/s/3f7a5e3cfc2e1a883e3e7c2efaf6e062220598c3.jpg"
    },
    {
        title: "Voyager",
        author: "Diana Gabaldon",
        image: "https://img.thriftbooks.com/api/images/s/cab584b48d0636d04752b432138610cf836fa8d1.jpg"
    },
    {
        title: "Dune",
        author: "Frank Hebert",
        image: "https://img.thriftbooks.com/api/images/i/s/5B1290BDD8BB5A4B4C4CD8C4A25741C7C5787C14.jpg"
    },
    {
        title: "The Lightning Thief",
        author: "Rick Riordan",
        image: "https://img.thriftbooks.com/api/images/s/5d592d3a3a3819baab5a7bc183a267b56d3b50a7.jpg"
    },
    {
        title: "Educated",
        author: "Tara Westover",
        image: "https://img.thriftbooks.com/api/images/i/s/A6EE18F92DCCC7BC4E7CC2E266AF1B62E0F6B59C.jpg"
    },
    {
        title: "A new Earth Awakening to",
        author: "Eckhart Toole",
        image: "https://img.thriftbooks.com/api/images/i/s/9971B086CD24D343FA0F88278A5135DDF9A2B4A9.jpg"
    },
    {
        title: "A Visit from Saint Nicholas, Twas",
        author: "Clement C. Moore",
        image: "https://img.thriftbooks.com/api/images/i/s/DF6D71624E8ED9654672650B3A253974804DAC1E.jpg"
    },
    {
        title: "The Bluest Eye",
        author: "Toni Morrison",
        image: "https://img.thriftbooks.com/api/images/i/s/10525F0966ECC637C128504DCE803A1638D337CA.jpg"
    },
    {
        title: "Frankenstein: or< The Modern",
        author: "Mary Wollstonecraft",
        image: "https://img.thriftbooks.com/api/images/i/s/AF57A92541329B1AFE8C775492F0747599322229.jpg"
    }
]
document.getElementById('newBook').addEventListener('click',()=>{
    libaryContiner.style.display= "none";
    addForm.style.display= "flex";

})
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newBook ={
        title:document.getElementById("bookTitle").value,
        auther:document.getElementById("bookAuthor").value,
        image:document.getElementById("bookImg").value
    }
    console.log(newBook)
    books.push(newBook)
    createAllBooks(books);
    libaryContiner.style.display= "flex";
    addForm.style.display= "none";
})

const createOneBook = (parent,{title,author,image})=>{
    const imgCont =document.createElement('div');
    imgCont.className ="img-cont"

    const imgElem =document.createElement('img');
    imgElem.setAttribute('src',image)
    imgCont.append(imgElem);

    const detalCont =document.createElement('div');
    detalCont.className ="book-cont"
    const titleCont=document.createElement('h3');
    titleCont.className="title-cont";
    titleCont.innerText= title;
    const authorCont =document.createElement("h4");
    authorCont.className="author-cont";
    authorCont.innerText= author;

    detalCont.append(titleCont,authorCont);
    const bookCont =document.createElement('div');
    bookCont.className ="book-cont"
    
    bookCont.append(imgCont,detalCont);
    parent.append(bookCont);
}
const createAllBooks = (arr) => {
    shilf_1.innerHTML="";
    shilf_2.innerHTML="";
    shilf_3.innerHTML="";
    const sortArrToAlAlphab = arr.sort((a,b)=>{a-b});
    sortArrToAlAlphab.map((book,index,arr)=>{
        console.log(book)
        const onePart = parseInt(arr.length/3);
        if(index < onePart){
            createOneBook(shilf_1,book)
        }else if(index <(2*onePart)){
            createOneBook(shilf_2,book)
        }else {
            createOneBook(shilf_3,book);
        }
        
    })
}
createAllBooks(books);