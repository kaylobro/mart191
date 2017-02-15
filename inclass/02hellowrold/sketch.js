function setup() {
    createCanvas(500, 500);
    background(0, 253, 242);

    push();
    //example with push pop

    push();
    //translate moves the relative posiotion of all the shapes below it.
    translate(250, 100);
    fill(245, 222, 179);
    ellipse(0, 0, 300, 120);
    //head

    push();
    translate(0, -30);
    fill(0);
    ellipse(-50, 0, 30, 20);
    ellipse(50, 0, 30, 20);
    pop();
    //eyes

    push();
    line(-75, 20, 75, 10);
    //mouth

    push();
    fill(30, 20, 10);
    triangle(0, -30, 0, 15, 30, 40);
    pop();
    //nose

    push();
    rect(-70,60,150,200);
    pop();
    //body

    push();
    rect(-220,100,150,30);
    pop();
    //left arm

    push();
    rect(80,100,150,30);
    pop();
    //right arm

    push();
    rect(-50,260,30,150);
    pop();

    push();
    rect(30,260,30,150);
    pop();










    pop();







}

function draw() {



}
