
let canvas_width = 600;
let canvas_height = 400;
let c1, c2;

function setup() {
	frameRate(15);
	pixelDensity(1);
	createCanvas(canvas_width, canvas_height);
	c1 = color(random(255), random(255), random(255));
	c2 = color(random(255), random(255), random(255));
	// saveGif('submission.gif', 8, { 
	// 	units: 'seconds',
	// 	pixelDensity: 1,
 //        quality: 20 
	// });
}

function abstract_drawing() {
	let blue_to_red = lerpColor(color(0, 0, 255), color(255, 0, 0), sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(blue_to_red);
	stroke(blue_to_red);
	strokeWeight(4);
	arc(canvas_width/2, canvas_height/2, 300, 300, 0, PI);
	let red_to_blue = lerpColor(color(255, 0, 0), color(0, 0, 255), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(red_to_blue);
	stroke(red_to_blue);
	strokeWeight(4);
	arc(canvas_width/2, canvas_height/2, 300, 300, PI, 0);
}

function abstract_shapes() {
	let green_to_yellow = lerpColor(color(0, 255, 0), color(255, 255, 0), sin(frameCount * 0.05) * 0.5 + 0.5);
	let yellow_to_green = lerpColor(color(255, 255, 0), color(0, 255, 0), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(green_to_yellow);
	stroke(green_to_yellow)
	strokeWeight(4);
	// rotate rectangles
	rect((canvas_width/2 - 100) + sin(frameCount) *5, (canvas_height/2 - 100) + sin(frameCount) * 5, 200/2, 200);
	fill(yellow_to_green);
	stroke(yellow_to_green)
	strokeWeight(4);
	rect((canvas_width/2) + sin(frameCount) *5, (canvas_height/2 - 100) + sin(frameCount) * 5, 200/2, 200);
}

function abstract_triangle() {
	let mixColor1 = lerpColor(color(255, 0, 255), color(0, 255, 255), sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(mixColor1);
	stroke(0x00, 0xFF, 0xFF)
	strokeWeight(0.1);
	triangle(
		sin(frameCount) * 30 + canvas_width/2 - 100, (canvas_height/2/2 + 100),
		sin(frameCount) * 30 + canvas_width/2 + 100, (canvas_height/2/2 + 100),
		canvas_width/2, (canvas_height/2 - 100));
	let mixColor2 = lerpColor(color(0, 255, 255), color(255, 0, 255), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(mixColor2);
	stroke(0xFF, 0x00, 0xFF)
	strokeWeight(0.1);
	triangle(
		sin(frameCount) * 30 + canvas_width/2 - 100, (canvas_height/2/2 + 100),
		sin(frameCount) * 30 + canvas_width/2 + 100, (canvas_height/2/2 + 100),
		canvas_width/2, (canvas_height - 100));
}

function doulbe_flipped_ellipse() {
	let orange_to_purple = lerpColor(color(0xFF, 0xA5, 0x00), color(0x4B, 0x00, 0x82), sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(orange_to_purple);
	stroke(orange_to_purple);
	strokeWeight(2);
	ellipse(sin(frameCount) *50+ canvas_width/2, canvas_height/2, 
		(canvas_width/2/2), (canvas_height/2/2));
	let purple_to_orange = lerpColor(color(0x4B, 0x00, 0x82), color(0xFF, 0xA5, 0x00), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(purple_to_orange);
	stroke(purple_to_orange);
	strokeWeight(2);
	ellipse(canvas_width/2, cos(frameCount) *50+ canvas_height/2,
		(canvas_width/2/2/2), (canvas_height/2/2))
}

function center_circle() {
	let mixColor = lerpColor(c1, c2, sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(mixColor);
	stroke(mixColor);
	// noLoop();
	strokeWeight(2);
	ellipse(canvas_width/2, canvas_height/2, 50, 50);
}

function net_line() {
	// stroke(0x80);
	// strokeWeight(1);
	line(canvas_width/2, 0, canvas_width/2, canvas_height);
	line(0, canvas_height/2, canvas_width, canvas_height/2);

	let x = 50
	let y = 50

	let red_to_blue = lerpColor(color(255, 0, 0), color(0, 0, 255), cos(frameCount * 0.05) * 0.5 + 0.5);
	stroke(red_to_blue);
	strokeWeight(10);
	line(x, y, (canvas_width/2) - x*3, (canvas_height/2) - y*1.5)
	line((canvas_width/2) - x*3, y, x, (canvas_height/2) - y*1.5)

	let blue_to_red = lerpColor(color(0, 0, 255), color(255, 0, 0), sin(frameCount * 0.05) * 0.5 + 0.5);
	stroke(blue_to_red);
	strokeWeight(10);
	line((canvas_width/2) + x*3, (canvas_height/2) + y*1.5, canvas_width - x, canvas_height - y)
	line(canvas_width - x, (canvas_height/2) + y*1.5, (canvas_width/2) + x*3, canvas_height - y)


	let white_to_black = lerpColor(color(255, 255, 255), color(0, 0, 0), sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(white_to_black);
	noStroke();
	quad(
		50, canvas_height/2 + 50,
		100, canvas_height/2 + 50,
		150, canvas_height - 50,
		100, canvas_height - 50
	);


	let black_to_white = lerpColor(color(0, 0, 0), color(255, 255, 255), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(black_to_white);
	noStroke();
	quad(
		canvas_width - 50, canvas_height/2 - 50,
		canvas_width - 100, canvas_height/2 - 50,
		canvas_width - 150, 50,
		canvas_width - 100, 50
	);

}

function draw() {
	background(0x00); 
	let white_to_black = lerpColor(color(255, 255, 255), color(0, 0, 0), sin(frameCount * 0.05) * 0.5 + 0.5);
	fill(white_to_black);
	stroke(white_to_black);
	strokeWeight(10);
	rect(canvas_width/2, 0, canvas_width/2, canvas_height); 
	colorMode(RGB);
	let black_to_white = lerpColor(color(0, 0, 0), color(255, 255, 255), cos(frameCount * 0.05) * 0.5 + 0.5);
	fill(black_to_white);
	stroke(black_to_white);
	strokeWeight(10);
	rect(0, 0, canvas_width/2, canvas_height);
	// drawGlasses();

	abstract_drawing();
	abstract_shapes();
	abstract_triangle();
	doulbe_flipped_ellipse();
	center_circle();
	net_line();
	// saveCanvas('myCanvas', 'png'); 
	let x = width / 2 + sin(frameCount * 0.05) * 1000
	ellipse(x, height / 2, 50, 50);
}
