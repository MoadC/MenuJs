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
        this.parentNode.classList.toggle("select");
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
    let divs = document.querySelectorAll("div.select");
    const inputs = document.querySelectorAll("div.select > input[type=number]");
    let len = chosen.length;
    for (let index = len-1 ; index >= 0; index--) {
        chosen[index].classList.remove('selected');
        divs[index].classList.remove('select');
         //console.log('removed' + [index]);
        inputs[index].value=1 ;
        }
    });

    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    let result = 0;
  //console.log(modalContent.textContent);
    const inputs = document.querySelectorAll("div.select > input[type=number]");
    let chosen = document.getElementsByClassName('selected');
    let len = chosen.length;
    let text2 = '';
    for (let index = 0; index < len; index++) {
        //console.log(chosen[index].textContent);
        //console.log(matches[index]); 
        text2 += inputs[index].value + "x " + chosen[index].textContent + ".<br>" ;
        result += chosen[index].value * inputs[index].value;
    }
    const text = "<br><br>Your total is : <strong>";
    modalContent.innerHTML = "<h1 style='text-align:center; text-decoration: underline'>Your Receit</h1><br><br> You bought : <br><br>" + text2 + text + result + "</strong>dh<br><br><p style='color:rgb(68, 32, 39); text-align:center; font-weight:1000; text-decoration: underline'> Thank you! Come again!</p>";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});


function total(){

    let result = 0;
    let results=document.getElementById('results');
    //results.value='';
    let chosen = document.getElementsByClassName('selected');
    let len = chosen.length;
    //console.log(len);
    const inputs = document.querySelectorAll("div.select > input[type=number]");
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


