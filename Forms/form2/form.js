
var list = [];
var a;
var b1;
var b2;
var b3;
var c;
var d;
var e;
var Total;

function aCheck() {

    switch (true) {
        case (document.getElementById("a1").checked):
            a = 6.90;
            list.push("1x Big Mac")
            mult();
            break;
        case (document.getElementById("a2").checked):
            a = 4.90;
            list.push("1x Cheese Burger")
            mult();
            break;
        case (document.getElementById("a3").checked):
            a = 5.90;
            list.push("1x Veggie Burger")
            mult();
            break;
        case (document.getElementById("a4").checked):
            a = 8.90;
            list.push("1x Dime Burger")
            mult();
            break;
    }
    if (document.getElementById('a5').checked) {
        d = 0.75
        list.push("Gluten free bread $0.75")
        mult();
    }

}

function bCheck() {

    if (document.getElementById("b1").checked) {
        b1 = 1.10;
        list.push("1x Mexicano $1.10")
        mult();
    }
    if (document.getElementById("b2").checked) {
        b2 = 1.10;
        list.push("1x Iceberg $1.10")
        mult();
    }
    if (document.getElementById("b3").checked) {
        b3 = 1.10;
        list.push("1x Ranch $1.10")
        mult();
    }
}

function cCheck() {

    let dri = document.getElementById("drinks")
    let driIn = dri.options[dri.selectedIndex].value;

    if (document.getElementById("c1").checked) {
        e = 0.75;
        list.push("Large Cup $0.75")
        mult();
    }



    if (driIn === "Pepsi") {
        c = 2;
        list.push("1x Pepsi $2")
        mult();
        return;
    } else if (driIn === "Fanta") {
        c = 2;
        list.push("1x Fanta $2")
        mult();
    } else if (driIn === "Coca-Cola") {
        c = 2;
        list.push("1x Coke $2")
        mult();
    } else if (driIn === "Sprite") {
        c = 2;
        list.push("1x Sprite $2")
        mult();
    }


}

function resetForm() {
    document.getElementById("form1").reset();
}

/*
function fuLog() {
    console.log(a);
    console.log(b1);
    console.log(b2);
    console.log(b3);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(Total);
    console.log(list);


}
*/

function mult() {
    Total = a + b1 + b2 + b3 + c + d + e;
    return;
}
function fuDel() {
    Total = 0;
    a = 0;
    b1 = 0;
    b2 = 0;
    b3 = 0;
    c = 0;
    d = 0;
    e = 0;
    list = [];
    return;
}

function fuReciept() {
    alert(document.getElementById("ime").value + "\n" + "\nOrder list\n" + "\n" + list.join("\n") + "\n" + "\nFull price is " + "$" + Total)
}
var kop = document.getElementById("k1");
kop.addEventListener("click", fuDel);
kop.addEventListener("click", aCheck);
kop.addEventListener("click", bCheck);
kop.addEventListener("click", cCheck);
//kop.addEventListener("click", fuLog);
kop.addEventListener("click", mult);
kop.addEventListener("click", fuReciept);
kop.addEventListener("click", resetForm);