function setup() {
    createCanvas(500, 500);
    background(0, 253, 242);

    push();
    //example with push pop

    push();
    //translate moves the relative posiotion of all the shapes below it.
    translate(250, 100);
    fill(0, 200, 50);
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


    pop();







}

function draw() {



}
