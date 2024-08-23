// console.log("file loaded")

// DOM Event handled by javascript// 
document.querySelector("button").onclick=function() {
    // console.log("function called")
    // console.log(document.querySelector("#x1"))
    var p=document.querySelector("#x1").value;
    console.log(p)
    var n=document.querySelector("#x2").value;
    console.log(n)
    var r=document.querySelector("#x3").value;
    console.log(r)
    console.log(typeof p)

    p=Number(p)
    n=Number(n)
    r=Number(r)
    n=n*12;
    r=r/12/100;
    var emi=(p*r*(1+r)**n)/((1+r)**n-1);
    console.log(emi);
    document.querySelector("#p1").innerHTML=Math.round(emi);

    document.querySelector("#p2").innerHTML=p;
    document.querySelector("#p3").innerHTML=emi*n;
    document.querySelector("#p4").innerHTML=(emi*n)-p;
}
// Function without name->anonymous function or unnamed function//
