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
    }
]; //12

window.addEventListener('load',function(){
    console.log('loaded');
    
    //console.log(li[1]);
    function select(){
        this.classList.toggle("selected");
        //console.log(document.querySelector("this > input[type=number]"));
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
        //let liId = "item" + [index];
        //newli.id = liId;
        //console.log(newli.id);
        newli.addEventListener('click', select);   // to apply it to every li individually.     
    }

    document.querySelector('#reset').addEventListener('click', function(e) {
    //e.preventDefault();
    //receipt = {};
    document.getElementById('results').value = '';
    let chosen = document.getElementsByClassName('selected');
    //console.log(chosen)
    const inputs = document.querySelectorAll("li.selected > input[type=number]");
    let len = chosen.length;
    for (let index = len-1 ; index >= 0; index--) {
        chosen[index].classList.remove('selected');
        //console.log('removed' + [index]);
        inputs[index].value=1 ;
    }
    });


});


function total(){

    let result = 0;
    let results=document.getElementById('results');
    //results.value='';
    let chosen = document.getElementsByClassName('selected');
    let len = chosen.length;
    //console.log(len);
    const inputs = document.querySelectorAll("li.selected > input[type=number]");
    //const matches = container.querySelectorAll("input[type=number]");
    //console.log(container);
    for (let index = 0; index < len; index++) {
        //console.log(matches[index].value);
        //console.log(matches[index]); 
        result += chosen[index].value * inputs[index].value;
    }
    const text = results.innerText= "your total is : ";
    results.value =text + result ;
    result = 0;
}

