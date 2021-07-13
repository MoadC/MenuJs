var items= [
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    },
    {
        name:'item1',
        price: 15,
        id:'item1',
    }
]; //12

window.addEventListener('load',function(){
    console.log('loaded');
    
    //console.log(li[1]);
    function select(){
        this.classList.toggle("selected");
    }
    // let li = document.getElementById("item");
    // li.addEventListener('click', select);
    // let li2 = document.getElementById("item2");
    // li2.addEventListener('click', select);
    // let li3 = document.getElementById("item3");
    // li3.addEventListener('click', select);

    const allLi = document.getElementsByTagName('li');
    let lenLi = allLi.length;
    for (let index = 0; index < lenLi; index++) {
        let newli = allLi[index];  
        //console.log("item" + [index]);
        let liId = "item" + [index];
        newli.id = liId;
        //console.log(newli.id);
        newli.addEventListener('click', select);        
    }



});






function total(){

    let result = 0;
    let results=document.getElementById('results');
    //results.value='';
    let chosen = document.getElementsByClassName('selected');
    let len = chosen.length;
    //console.log(len);
    const container = document.querySelector("#testing");
    const matches = container.querySelectorAll("li > input[type=number]");
    for (let index = 0; index < len; index++) {
        //console.log(matches[index].value);
        result += chosen[index].value * matches[index].value;
    }
    const text = results.innerText= "your total is : ";
    results.value =text + result ;
    result = 0;
}

