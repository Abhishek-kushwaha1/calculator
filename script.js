// Number key
let k1 = document.getElementById("k1");
let k2 = document.getElementById("k2");
let k3 = document.getElementById("k3");
let k4 = document.getElementById("k4");
let k5 = document.getElementById("k5");
let k6 = document.getElementById("k6");
let k7 = document.getElementById("k7");
let k8 = document.getElementById("k8");
let k9 = document.getElementById("k9");
let k0 = document.getElementById("k0");


// oprations 
let plus = document.getElementById("plus");
let subt = document.getElementById("subt");
let dive = document.getElementById("dive");
let mult = document.getElementById("mult");

// Edisnal oprations 
let equl = document.getElementById("equl");
let clsbtn = document.getElementById("c");
let signbtn = document.getElementById("sign");
let modbtn = document.getElementById("mod");

// display numbers
let display = document.getElementById("showNumber");

// clearBtn event 
let clearBtnD = document.getElementById("c");

let num1 = 0;
let num2 = 0;
let opration = "";





let first = true; 

const clearBtn = () => {
    num1 = 0;
    num2 = 0;
    console.log(num1,num2);
};

clearBtnD.addEventListener('click',()=>{
    clearBtn();
})




let n = 0;

const addingNumberForCal = (n) => {
  console.log("k2 is clicked !");
  if(first){
      num1 = (num1*10) + n;
      console.log(num1);
      display.innerText = num1;
  }
  else{
    num2 = (num2*10) + n;
    console.log(num1,num2);
    display.innerText = num2;
  }
}

k1.addEventListener("click", () => {
  console.log("k1 is clicked !");
  n = 1;
  addingNumberForCal(n);
  n = 0;
});
k2.addEventListener("click",()=>{
  n = 2;
  addingNumberForCal(n);
  n = 0;
});
k3.addEventListener("click",()=>{
  n = 3;
  addingNumberForCal(n);
  n = 0;
});
k4.addEventListener("click",()=>{
  n = 4;
  addingNumberForCal(n);
  n = 0;
});
k5.addEventListener("click",()=>{
  n = 5;
  addingNumberForCal(n);
  n = 0;
});
k6.addEventListener("click",()=>{
  n = 6;
  addingNumberForCal(n);
  n = 0;
});
k7.addEventListener("click",()=>{
  n = 7;
  addingNumberForCal(n);
  n = 0;
});
k8.addEventListener("click",()=>{
  n = 8;
  addingNumberForCal(n);
  n = 0;
});k9.addEventListener("click",()=>{
  n = 9;
  addingNumberForCal(n);
  n = 0;
});k0.addEventListener("click",()=>{
  n = 0;
  addingNumberForCal(n);
  n = 0;
});


const optCall = (opration) =>{
  console.log("call kar diya ha !");
  first = false;
  console.log(opration);
}

plus.addEventListener('click',()=>{
  opration = "plus";
  optCall(opration);
});

subt.addEventListener("click",()=>{
  opration = "subt";
  optCall(opration);
})

dive.addEventListener("click",()=>{
  opration = "dive";
  optCall(opration);
})

mult.addEventListener("click",()=>{
  opration = "mult";
  optCall(opration);
})

const cls = ()=>{
  num1 = 0;
  num2 = 0;
  ans = 0;
  first = true;
  display.innerText = "0";
}

clsbtn.addEventListener("click",()=>{
  cls();
  console.log("cls is clicked ");
})

const sign = () =>{
  if(first){
    num1 *=(-1);
    display.innerText = num1;
  }
  else{
    num2 *=(-1);
    display.innerText = num2;
  }
}

signbtn.addEventListener("click",()=>{
  sign();
  console.log("SIgn is changed");
})

const mod = ()=>{
  if(first){
    num1 = num1/100;
    display.innerText = num1;
  }
  else{
    num2 = num2/100;
    display.innerText = num2;
  }
}
modbtn.addEventListener("click",()=>{
  mod();
})

// Equl fumtion 
equl.addEventListener('click',()=>{
  if(opration === "plus"){
    let ans = num1+num2;
    console.log(ans);
    display.innerText = ans;
    first = false;
    num2 = 0;
    num1 = ans;
  }
  else if(opration === "subt"){
    let ans = num1-num2;
    console.log(ans);
    display.innerText = ans;
    first = false;
    num2 = 0;
    num1 = ans;
  }
  else if (opration === "mult"){
    let ans = num1*num2;
    console.log(ans);
    display.innerText = ans;
    first = false;
    num2 = 0;
    num1 = ans;
  }
  else if(opration === "dive"){
    let ans = num1/num2;
    console.log(ans);
    display.innerText = ans;
    first = false;
    num2 = 0;
    num1 = ans;
  }
  else{
    console.log("Error !");
  }
})
