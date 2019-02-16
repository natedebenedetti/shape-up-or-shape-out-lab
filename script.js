class Shape {
    constructor(width, height, name) { //parent class "Shape" contains all inherited methods and properties for the child classes.
        this.width = width;
        this.height = height;
        this.name = name;
        this.div = $('<div class="shape"></div>');
        this.randomLocation(); // 
        $('#drawing-pad').append(this.div);
        this.div.hover(() => { // when you mouse over a shape it displays the nav bar with info about that shape, mousing out hides nav bar.
            openNav();
            $('#p1').text(`Shape Name: ${name}`);
            $('#p2').text(`Width: ${width}`);
            $('#p3').text(`Height: ${height}`);
        }, () => {
            closeNav();
            $('#p1').empty();
            $('#p2').empty();
            $('#p3').empty();
            $('#p4').empty();
            $('#p5').empty();
            $('#p6').empty();
        });

    }
    randomLocation() { //method that calls on the "randomVals" function below to place the child shapes in absolute postions on the drawing pad.
        const xMax = 600 - this.width; //this subtracts the width from the maximum x value so that the shape stays in the boundaries of the canvas.
        const yMax = 600 - this.height;// does same thing for the maximum y value.
        let x = randomVals(0, xMax);
        let y = randomVals(0, yMax);
        this.div[0].style.left = x + "px";
        this.div[0].style.top = y + "px";
    }
}
class Rectangle extends Shape { //child class of shape
    constructor(width, height) {
        super(width, height, name);
        this.div.css({ "width": width, "height": height, "background-color": "green" });


    }
}
class Square extends Shape { //child class of shape
    constructor(sideLength) {
        super(sideLength, sideLength, name);
        this.sideLength = sideLength;
        this.div.css({ "width": sideLength, "height": sideLength, "background-color": "red" });

    }
}
class Circle extends Shape { //child class of shape
    constructor(radius) {
        super(radius * 2, radius * 2, name);
        this.radius = radius;
        this.div.css({ "width": radius * 2, "height": radius * 2, "border-radius": "50%", "background-color": "purple" });


    }
}
class Triangle extends Shape { //child class of shape
    constructor(height) {
        super(height, height, name);
        this.div.css({ "width": "0", "height": "0", "border-bottom": "" + height + "px solid yellow", "border-right": "" + height + "px solid transparent" });

    }
}
// beginning of button click listeners that create the shapes.
$('#make-rec').click(() => {
    let width = $('#rec-form-w').val();
    let height = $('#rec-form-h').val();
    name = "Rectangle";
    let newRec = new Rectangle(width, height);

});
$('#make-sq').click(() => {
    let sideLength = $('#sq-form').val();
    name = "Square";
    let newSq = new Square(sideLength);

});
$('#make-cir').click(() => {
    let radius = $('#cir-form').val();
    name = "Circle";
    let newCir = new Circle(radius);

});
$('#make-tri').click(() => {
    let height = $('#tri-form').val();
    name = "Triangle";
    let newTri = new Triangle(height);
});
// end of button click listeners for creating shapes.


function randomVals(min, max) { // function that creates random numbers between 0 and 600
    return Math.floor(Math.random() * (max - min)) + min;

}

function openNav() { //function that makes the nav bar visible
    $('#mySidePanel')[0].style.width = '250px';

}

function closeNav() { //function that removes nav bar from visibility.
    $('#mySidePanel')[0].style.width = "0";
}