class Shape {
    constructor() {

    }

}
class Rectangle extends Shape {
    constructor() {
        super();
    }
}
class Square extends Shape {
    constructor() {
        super();
    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
}







function openNav() {
    document.getElementById("mySidePanel").style.width = "250px";
    let mySidePanel = $('#mySidePanel');
    console.log(mySidePanel);
}

function closeNav() {
    document.getElementById("mySidePanel").style.width = "0";
}