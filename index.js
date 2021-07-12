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

        //let li = document.getElementById("item");
        li.classList.toggle("selected");
    }
    let li = document.getElementById("item");
    li.addEventListener('click', select);

});

