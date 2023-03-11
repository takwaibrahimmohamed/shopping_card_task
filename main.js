// definevariable
icon = document.querySelector('.icon i')
pop = document.querySelector('.pop')
let iconCount = document.querySelector('.icon span') 
let cardContainer = document.querySelector("section .container")
let content = document.querySelector('.pop .content')

let queckpop = document.querySelector('.queckpop')
// definevariable


icon.addEventListener('click',()=>{
    pop.classList.toggle('active')
})



let Product = [
    {
        id:1,
        prodName:"chocalate cake",
        prodPrice :"14",
        prodImag: "images/menu-item-01.jpg",
        add_to_card : false

    },{
        id:2,
        prodName:"classy pancake",
        prodPrice :"12",
        prodImag: "images/menu-item-02.jpg",
        add_to_card : false
    },{
        id:3,
        prodName:"tall klassy bread",
        prodPrice :"24",
        prodImag: "images/menu-item-03.jpg",
        add_to_card : false
    },{
        id:4,
        prodName:"blueberry cheesecake",
        prodPrice :"34",
        prodImag: "images/menu-item-04.jpg",
        add_to_card : false
    },{
        id:5,
        prodName:"classy pancake",
        prodPrice :"10",
        prodImag: "images/menu-item-05.jpg",
        add_to_card : false
    },{
        id:6,
        prodName:"classy pancake",
        prodPrice :"27",
        prodImag: "images/menu-item-02.jpg",
        add_to_card : false
    }
]
let basket =JSON.parse(localStorage.getItem("data"))||[]
display=()=>{
    localStorage.setItem("data",JSON.stringify(basket))
    Product.map((ele)=>{ 
        cardContainer.innerHTML +=`
                    <div class="box" id = ${ele.id}>
                        <div class="image">
                            <img src=${ele.prodImag} alt="">
                        </div>
                        <div class="name">${ele.prodName}</div>
                        <div class="price">$${ele.prodPrice}</div>
                        <div class="btns">
                            <div class="add" onclick = "increaseItem(${ele.id})">add to card</div>
                            
                            <div class="quick_veiw" onclick = "quickveiw(${ele.id})">quick_veiw</div>
                        </div>
                    </div>
        `
        })
        
}

display()



increaseItem=(id)=>{ 
   
let search = basket.find((e)=>{return e.iditem == id})
let added = Product.map((add)=>{return add.add_to_card})

if(search == undefined){
    
    basket.push( {iditem :id,num:1 })
    localStorage.setItem("data",JSON.stringify(basket))
    added =true
}  
else{
    search.num +=1
   decrease(id)
}

calc()
displayInCard()
addOrRemove(added,id)

// 
}

displayInCard = ()=>{ 
    localStorage.setItem("data",JSON.stringify(basket))
    return (content.innerHTML =basket.map((x)=>{
        let {iditem,num} = x
       let search =  Product.find((ele)=>ele.id == iditem)
       return `
       <div class="card" ${search.id}>
       <div class="imges">
           <img src=${search.prodImag} alt="">
       </div>
       <div class="info">
           <div class="name">${search.prodName}</div>
           <div class="price">$${search.prodPrice}</div>
       </div>
       
   </div>
       `
    })).join("")
    

}
displayInCard()
function addOrRemove(add,id){
    let search = basket.find((e)=>{return e.iditem == id})
   
 Product.map((ele,i)=>{    
    if( ele.id == id ){
        
        if(add == true){
            // cons
            console.log(search)
            document.querySelectorAll('.box')[i].children[3].firstElementChild .textContent= "remove from card"
        //    add = false
        } 
        else{
       
            document.querySelectorAll('.box')[i].children[3].firstElementChild .textContent= "add to card"
        }
        
    }
   
 })
 
}

function decrease(id){
  
    basket =  basket.filter((ele)=>{return ele.iditem !== id})
    
}


function calc(){
    iconCount.innerHTML = basket.map((x)=>x.num).reduce((x,y)=>x+y,0)
    
}
calc()




// startqueck



veiw = (id)=>{
  Product.map((e)=>{
    if(e.id ==id ){
        queckpop.innerHTML = `
        <div class="box">
            <div class="image">
                <img src=${e.prodImag} alt="">
            </div>
            <div class="name">${e.prodName}</div>
            <div class="price">$${e.prodPrice}</div>
            <div class="btns">
                <div class="add">add to card</div>
                <div onclick = "closes()" class="exit" >exit</div>
            </div>
        </div>`
    }
  })
// return 
}
quickveiw =(id)=>{
    queckpop.classList.remove('close')
    veiw(id)
}
closes =()=>{

    queckpop.classList.add('close')
}
closes()
// endqueck


