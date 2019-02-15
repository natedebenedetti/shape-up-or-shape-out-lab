class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = $('<div class="shape"></div>');
        $('#drawing-pad').append(this.div);
        
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.css({"width": width, "height": height});
    }
}
class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
        this.div.css({"width": sideLength, "height": sideLength});

    }
}
class Circle extends Shape {
    constructor(radius) {
        super(radius*2, radius*2)
        this.radius = radius;
        this.div.css({"width": radius*2, "height": radius*2, "border-radius": "50%"});
        
        
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
}

$('#make-rec').click(() => {
    let width = $('#rec-form-w').val();
    let height = $('#rec-form-h').val();
    let newRec = new Rectangle(width, height);
    
    
});
$('#make-sq').click(() => {
    let sideLength = $('#sq-form').val();
    let newSq = new Square(sideLength);
    
});
$('#make-cir').click(() => {
    let radius = $('#cir-form').val();
    let newCir = new Circle(radius);
    
});
$('#make-tri').click(() => {
    
    
});

function openNav() {
    $('#mySidePanel')[0].style.width = '250px';
    
}

function closeNav() {
    $('#mySidePanel')[0].style.width = "0";
}