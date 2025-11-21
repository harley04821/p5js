
let canvas_width = 600;
let canvas_height = 400;
function setup() {
	createCanvas(canvas_width, canvas_height);
}

function abstract_drawing() {
	fill(0xFF, 0x00, 0x00);
	stroke(0x00, 0x00, 0xFF)
	strokeWeight(4);
	arc(canvas_width/2, canvas_height/2, 300, 300, 0, PI);
	fill(0x00, 0x00, 0xFF);
	stroke(0xFF, 0x00, 0x00)
	strokeWeight(4);
	arc(canvas_width/2, canvas_height/2, 300, 300, PI, 0);
}

function abstract_shapes() {
	fill(0x00, 0xFF, 0x00);
	stroke(0xFF, 0xFF, 0x00)
	strokeWeight(4);
	rect(canvas_width/2 - 100, canvas_height/2 - 100, 200/2, 200);
	fill(0xFF, 0xFF, 0x00);
	stroke(0x00, 0xFF, 0x00)
	strokeWeight(4);
	rect(canvas_width/2, canvas_height/2 - 100, 200/2, 200);
}

function abstract_triangle() {
	fill(0xFF, 0x00, 0xFF);
	stroke(0x00, 0xFF, 0xFF)
	strokeWeight(0.1);
	// half half triangle
	triangle(
		canvas_width/2 - 100, (canvas_height/2/2 + 100), 
		canvas_width/2 + 100, (canvas_height/2/2 + 100), 
		canvas_width/2, (canvas_height/2 - 100));
	fill(0x00, 0xFF, 0xFF);
	stroke(0xFF, 0x00, 0xFF)
	strokeWeight(0.1);
	triangle(
		canvas_width/2 - 100, (canvas_height/2/2 + 100), 
		canvas_width/2 + 100, (canvas_height/2/2 + 100), 
		canvas_width/2, (canvas_height - 100));

	//  opposite flipped half
}

function doulbe_flipped_ellipse() {
	fill(0xFF, 0xA5, 0x00);
	stroke(0x4B, 0x00, 0x82)
	strokeWeight(2);
	ellipse(canvas_width/2, canvas_height/2, 
		(canvas_width/2/2), (canvas_height/2/2));
	fill(0x4B, 0x00, 0x82);
	stroke(0x00)
	strokeWeight(2);
	ellipse(canvas_width/2, canvas_height/2, 
		(canvas_width/2/2/2), (canvas_height/2/2))
}

function center_circle() {
	fill(0x00)
	stroke(0x00, 0x00, 0x00)
	strokeWeight(2);
	ellipse(canvas_width/2, canvas_height/2, 50, 50);
}

function net_line() {
	stroke(0x80);
	strokeWeight(1);
	line(canvas_width/2, 0, canvas_width/2, canvas_height);
	line(0, canvas_height/2, canvas_width, canvas_height/2);

	// left upside draw x 
	// right downside draw x
	let x = 50
	let y = 50

	noFill();
	stroke(0x0,0x00,0xFF);
	strokeWeight(10);
	// left upside draw x
	line(x, y, (canvas_width/2) - x*3, (canvas_height/2) - y*1.5)
	line((canvas_width/2) - x*3, y, x, (canvas_height/2) - y*1.5)

	fill(0x80);
	stroke(0xFF,0x00,0x00);
	strokeWeight(10);
	// right downside draw x
	line((canvas_width/2) + x*3, (canvas_height/2) + y*1.5, canvas_width - x, canvas_height - y)
	line(canvas_width - x, (canvas_height/2) + y*1.5, (canvas_width/2) + x*3, canvas_height - y)

	// left downside draw quadrilateral that is not rectangle which is neutral evil

	fill(0x00)
	noStroke();
	quad(
		50, canvas_height/2 + 50,
		100, canvas_height/2 + 50,
		150, canvas_height - 50,
		100, canvas_height - 50
	);

	// right upside draw quadrilateral that is not rectangle which is evil

	fill(0xFF)
	noStroke();
	quad(
		canvas_width - 50, canvas_height/2 - 50,
		canvas_width - 100, canvas_height/2 - 50,
		canvas_width - 150, 50,
		canvas_width - 100, 50
	);

}

function draw() {
	noLoop();
	background(0x00); 
	fill(0xFF);
	stroke(0x00);
	strokeWeight(10);
	rect(0, 0, canvas_width/2, canvas_height);
	fill(0x00);
	stroke(0xFF);
	strokeWeight(10);
	rect(canvas_width/2, 0, canvas_width/2, canvas_height); 

	abstract_drawing();
	abstract_shapes();
	abstract_triangle();
	doulbe_flipped_ellipse();
	center_circle();
	net_line();
	// saveCanvas('myCanvas', 'png'); // saves as myCanvas.png
}
