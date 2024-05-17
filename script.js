
let alphaBtn=document.querySelector(".alpha");
let countVo=document.querySelector(".countVowels");
let searchAlpha=document.querySelector(".searchAlpha");
let numbers=document.querySelector(".numbers");

alphaBtn.addEventListener("click",()=>{
    let str=document.querySelector("#input1").value.toLowerCase();
    let char=document.querySelector("#input2").value.toLowerCase();
    let ansr=document.querySelector("p"); 
let count=0;
for(i=0;i<str.length;i++)
    {
        if(str.at(i)==char)
            {
                count=count+1;
            }
    }

ansr.innerText=count;
});

searchAlpha.addEventListener("click",()=>{
    let str=document.querySelector("#input1").value.toLowerCase();
    let subStr=document.querySelector("#input2").value.toLowerCase();
    let ansr=document.querySelector("p"); 
    let val;
    if(str.includes(subStr))
        {
            val="Yes";
        }
        else{
            val="No";
        }
        ansr.innerText=val;
})

countVo.addEventListener("click",()=>{
    let str=document.querySelector("#input1").value.toLowerCase();
    let char=document.querySelector("#input2").value.toLowerCase();
    let ansr=document.querySelector("p"); 
let count=0;
for(i=0;i<str.length;i++){
    switch(str.at(i))
    {
        case 'a': count=count+1;
        break;

        case 'e': count=count+1;
        break;

        case 'i': count=count+1;
        break;

        case 'o': count=count+1;
        break;

        case 'u': count=count+1;
        break;

    }
}
ansr.innerText=count;
});

numbers.addEventListener("click",()=>{
    let str=document.querySelector("#input1").value.toLowerCase();
    let char=document.querySelector("#input2").value.toLowerCase();
    let ansr=document.querySelector("p"); 
let count=0;
for(i=0;i<str.length;i++){
    switch(str.at(i))
    {
        case '1': count=count+1;
        break;

        case '2': count=count+1;
        break;

        case '3': count=count+1;
        break;

        case '4': count=count+1;
        break;

        case '5': count=count+1;
        break;

        case '6': count=count+1;
        break;

        case '7': count=count+1;
        break;

        case '8': count=count+1;
        break;

        case '9': count=count+1;
        break;

        case '0': count=count+1;
        break;

    }
}
ansr.innerText=count;
});

