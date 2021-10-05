const shilf_1=document.getElementById("shilf1"),
        shilf_2=document.getElementById("shilf2"),
        shilf_3=document.getElementById("shilf3");

let books = [
    {
        title: "book1",
        author: "John Doe",
        image: "https://img.com/bookimg.jpeg"
    },
    {
        title: "book1",
        author: "John Doe",
        image: "https://img.com/bookimg.jpeg"
    },
    {
        title: "book1",
        author: "John Doe",
        image: "https://img.com/bookimg.jpeg"
    }
]

const createOneBook = (parent,{title,author,image})=>{
    const bookCont =document.createElement('div');
    bookCont.className ="book-cont"
    bookCont.style.backgroundImage =image;
    const titleCont=document.createElement('h3');
    titleCont.className="title-cont";
    titleCont.innerText= title;
    const authorCont =document.createElement("h4");
    authorCont.className="author-cont";
    authorCont.innerText= author

    bookCont.append(titleCont,authorCont);
    parent.append(bookCont);
}
const createAllBooks = (arr) => {
    const sortArrToAlAlphab = arr.sort((a,b)=>{a-b});
    console.log(sortArrToAlAlphab)
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