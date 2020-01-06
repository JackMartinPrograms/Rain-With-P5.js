var drops = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < 500; i++) {
		drop = new Drop(random(width), random(-1000, -50));
		drops.push(drop);
	}
}

function draw() {
	background(0);
	for (var i = 0; i < drops.length; i++) {
		drops[i].show();
		drops[i].update();
	}
}

function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.ySpeed = random(4, 10);
  this.length = random(5, 20);

  this.update = function() {
    this.y = this.y + this.ySpeed;
    this.ySpeed += 0.05;

    if (this.y > height) {
      this.y = random(-300, -100);
      this.ySpeed = random(4, 10);
    }
  }

  this.show = function() {
    stroke(0, 255, 255);
    line(this.x, this.y, this.x, this.y + 10);
  }
}
