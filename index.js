const dell = document.getElementById("del") ;
const acc = document.getElementById("acc") ;
const one = document.getElementById("one") ;
const two = document.getElementById("two") ;
const three = document.getElementById("three") ;
const four = document.getElementById("four") ;
const five = document.getElementById("five") ;
const six = document.getElementById("six") ;
const seven = document.getElementById("seven") ;
const eight = document.getElementById("eight") ;
const nine = document.getElementById("nine") ;
const zero = document.getElementById("zero") ;
const doubleZero = document.getElementById("doubleZero") ;
const dot = document.getElementById("dot") ;
const slash = document.getElementById("slash") ;
const multi = document.getElementById("multi") ;
const minus = document.getElementById("minus") ;
const plus = document.getElementById("plus") ;
const eql = document.getElementById("eql") ;
const textArea = document.getElementById("textArea") ;



function oneF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }

    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "1" ;
    console.log("weda")

}

function twoF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }

    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "2" ;
    console.log("weda")

}

function threeF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }

    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "3" ;
    console.log("weda")

}
function fourF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "4" ;
    console.log("weda")

}
function fiveF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "5" ;
    console.log("weda")

}
function sixF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "6" ;
    console.log("weda")

}
function sevenF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "7" ;
    console.log("weda")

}
function eightF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "8" ;
    console.log("weda")

}
function nineF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "9" ;
    console.log("weda")

}
function zeroF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "0" ;
    console.log("weda")

}
function doubleZeroF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value += "00" ;
    console.log("weda")

}

function accF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    textArea.value = "" ;
    console.log("weda")

}

function delF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }

    const val = textArea.value ;
    const upVal = val.slice(0 , -1) ;
    textArea.value = upVal
    console.log("weda")

}

function multiF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }


    textArea.value += "*"
    console.log("weda")

}

function dividF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }


    textArea.value += "/"
    console.log("weda")

}


function subF () {

    if(textArea.value == "Infinity" || textArea == "undefined" ){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }


    textArea.value += "-"
    console.log("weda")

}


function addF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }


    textArea.value += "+"
    console.log("weda")

}

function equlF () {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }


    const val = textArea.value ;
    textArea.value = eval(val) ;



}

function dotF() {

    if(textArea.value == "Infinity"){

        textArea.value = "";
    
    }
    else if(textArea.value == "undefined"){

        textArea.value = "";
    
    }



    textArea.value += "."
    console.log("weda")

   
}








one.addEventListener('click' , oneF) ;
two.addEventListener('click' , twoF) ;
three.addEventListener('click' , threeF) ;
four.addEventListener('click' , fourF) ;
five.addEventListener('click' , fiveF) ;
six.addEventListener('click' , sixF) ;
seven.addEventListener('click' , sevenF) ;
eight.addEventListener('click' , eightF) ;
nine.addEventListener('click' , nineF) ;
zero.addEventListener('click' , zeroF) ;
doubleZero.addEventListener('click' , doubleZeroF) ;
acc.addEventListener('click' , accF) ;
dell.addEventListener('click' , delF) ;
multi.addEventListener('click' , multiF) ;
plus.addEventListener('click' , addF) ;
minus.addEventListener('click' , subF) ;
slash.addEventListener('click' , dividF) ;
eql.addEventListener('click' , equlF) ;
dot.addEventListener('click' , dotF) ;


