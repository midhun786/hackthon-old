let nav=document.createElement('nav');
nav.innerHTML=`<nav class="navbar navbar-light bg-secondary">
<div class="container">
  <a class="navbar-brand text-white">ICE and FIRE</a>
<form class="d-flex">
    <input class="form-control me-2" type="search" id='input' placeholder="Search By BookNumber" aria-label="Search">
    <button  class="btn btn-warning" type="button" onclick="tension()" >Search</button>
  </form>
</div>
</nav>`
document.body.append(nav);

let divOverall=document.createElement('div');
divOverall.setAttribute('id','juke');


let div1 =document.createElement('div');   
div1.setAttribute('id','book');             
div1.setAttribute('class','container mt-2')        
         

let div2 =document.createElement('div');                                             
div2.setAttribute('id','nameIsbn');              
div2.setAttribute('class','container mt-2')         
                                                      

let div3 =document.createElement('div');
div3.setAttribute('id','noOfPages');
div3.setAttribute('class','container mt-2')


let div4 =document.createElement('div');
div4.setAttribute('id','authors');
div4.setAttribute('class','container mt-2')


let div5 =document.createElement('div');
div5.setAttribute('id','pubnmReldt');
div5.setAttribute('class','container mt-2')


let orderList=document.createElement('ol');
orderList.setAttribute('class','container') 
orderList.setAttribute('id','dude'); 

divOverall.append(div1,div2,div3,div4,div5,orderList)
document.body.append(divOverall);

function tension(){                                                                                                                      
  async function foo(){ 
    let input1=document.getElementById('input').value;                  
    let res= await fetch(`https://www.anapioficeandfire.com/api/books/${input1}`);
    console.log(res);
    let ele=await res.json()       
    console.log(ele);           
    try{                                  
                                                           
        let a= `Book: ${ele.name}`;        
        let b=`Name is ${ele.name},Isbn is ${ele.isbn}`    
        let c=`No Of Pages: ${ele.numberOfPages}`  
        let d=`Author: ${ele.authors[0]}`    
        let e=`Published Name: ${ele.publisher}, Released Date:${ele.released}`

     
     let book=document.getElementById('book');
     book.innerHTML=`<h1>${a}</h1>` 
     let nameIsbn=document.getElementById('nameIsbn');
     nameIsbn.innerHTML=`<h3>1.${b}</h3>`
     let noOfPages=document.getElementById('noOfPages');
     noOfPages.innerHTML=`<h3>2.${c}</h3>`
     let authors=document.getElementById('authors');
     authors.innerHTML=`<h3>3.${d}</h3>`
     let pubnmReldt=document.getElementById('pubnmReldt');
     pubnmReldt.innerHTML=`<h3>4.${e}</h3>`
     let dude=document.getElementById('dude');
     dude.innerHTML=`<h3>5.Characters:</h3>
     <li>char1-${ele.characters[0]}</li>
     <li>char2-${ele.characters[1]}</li>
     <li>char3-${ele.characters[2]}</li>
     <li>char4-${ele.characters[3]}</li>
     <li>char5-${ele.characters[4]}</li>`
   
   }catch(error){
    alert("give book number Below 12");
    console.log(error);
  }  
  
}                       
 foo(); 
}
















