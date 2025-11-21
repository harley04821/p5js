
let height = 400;
let width = 600;
let stars = []; // Array to hold star objects

const drawJSLogo = () => {

	// Draw the yellow square background

	fill(0);
	strokeWeight(5);
	stroke(255, 215, 0);
	textFont('Arial', 32);
	text('JS', width - 50, height - 50);
	// Draw the "JS" text
	textSize(32);
	textAlign(CENTER, CENTER);

}

const drawSpaceBackground = () => {
    // Draw all the small stars
    fill(255);
    noStroke();
    for (const star of stars) {
        ellipse(star.x, star.y, star.size);
    }
	// drawJSLogo();
};

function setup() {
    for (let i = 0; i < 400; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random(1, 4.5)
        });
    }
	createCanvas(600, 400);
}

const drawGlasses = () => {
	fill(0, 0, 0, 50);
	stroke(0);
	strokeWeight(2);

	// Glass lenses
	arc(width / 2 - 40, height / 2 - 30, 70, 70, 0, TWO_PI);
	arc(width / 2 + 40, height / 2 - 30, 70, 70, 0, TWO_PI);

	// Bridge
	line(width / 2 - 5, height / 2 - 30, width / 2 + 5, height / 2 - 30);

	// Temples
	line(width / 2 - 75, height / 2 - 30, width / 2 - 100, height / 2 - 20);
	line(width / 2 + 75, height / 2 - 30, width / 2 + 100, height / 2 - 20);
}

const drawHair = () => {
	fill(0);
	noStroke();

	// Draw elipse for the main hair mass
	ellipse(width / 2, height / 2 - 100, 220, 180);
}

const drawBeard = () => {

	stroke(0);        // Set the color of the lines to black
	strokeWeight(1.5);  // Use a thinner line for this style

	// Define the boundaries for the beard area
	const centerX = width / 2;
	const faceRadiusX = 100; // Horizontal radius of the face ellipse
	const faceRadiusY = 125; // Vertical radius of the face ellipse
	const beardTopY = height / 2 + 80; // How high the beard starts
	const beardWidth = 85; // How far the beard goes to the sides

	for (let x = centerX - beardWidth; x <= centerX + beardWidth; x += 18) {

		const bottomY = (height / 2) + faceRadiusY * sqrt(1 - pow((x - centerX) / faceRadiusX, 2));

		if (beardTopY < bottomY) {
			line(x, beardTopY, x, bottomY);
		}
	}
}

const drawPimples = () => {
	// Use a slight, reddish skin-tone color. The 4th number (200) adds transparency.
	fill(255, 180, 150)
	noStroke();

	// Draw more pimples at fixed locations
	// ellipse(x, y, size);

	// --- Forehead & Temples ---
	ellipse(width / 2 + 25, height / 2 - 85, 5);
	ellipse(width / 2 - 40, height / 2 - 70, 4);
	ellipse(width / 2 - 10, height / 2 - 110, 5); // New
	ellipse(width / 2 + 50, height / 2 - 60, 4);  // New
	ellipse(width / 2 - 90, height / 2 - 40, 5);  // New (Temple)

	// --- Cheeks & Nose Area ---
	// Left cheek cluster
	ellipse(width / 2 - 65, height / 2 + 10, 6);
	ellipse(width / 2 - 50, height / 2 + 25, 4);
	ellipse(width / 2 - 80, height / 2 + 30, 5);  // New

	// Right cheek cluster
	ellipse(width / 2 + 70, height / 2 + 20, 5);
	ellipse(width / 2 + 55, height / 2, 4);       // New
	ellipse(width / 2 + 85, height / 2 + 40, 6);  // New

	// Near nose
	ellipse(width / 2 - 30, height / 2 - 5, 4);   // New

	// --- Chin ---
	ellipse(width / 2 - 15, height / 2 + 110, 5);
	ellipse(width / 2 + 25, height / 2 + 100, 4); // New
}


const drawMouth = () => {
	noFill();
	stroke(150, 0, 0);
	strokeWeight(3);
	arc(width / 2, height / 2 + 50, 80, 40, 0, PI);
}

const drawNeckAndClothes = () => {
	push(); // Isolate styles for this part of the drawing
	stroke(0);
	strokeWeight(2);

	// --- Neck (drawn first, to sit behind the shirt) ---
	fill(255, 224, 189); // Skin color
	// A simple rectangle is fine, as the shirt collar will cover its base.
	rect(width / 2 - 35, height / 2 + 100, 70, 50);

	// --- Clothes (Shirt with a collar and shoulders) ---
	fill(70, 130, 180); // Blue shirt color
	// We use beginShape() to create a custom shape for the shirt
	// that includes sloping shoulders.
	beginShape();
	// Start drawing from the bottom-left corner of the canvas
	vertex(0+80, height);
	// Left side of the shirt body
	vertex(0+80, height / 2 + 180);
	// Left sloping shoulder, leading to the collar
	vertex(width / 2 - 60, height / 2 + 130);
	// Right side of the collar
	vertex(width / 2 + 60, height / 2 + 130);
	// Right sloping shoulder
	vertex(width-80, height / 2 + 180);
	// Right side of the shirt body
	vertex(width-80, height);
	endShape(CLOSE);

	pop();
};

const drawEyebrows = () => {
	stroke(0);
	strokeWeight(17);
	noFill();

	// above of glasses height little thick
	arc(width / 2 - 40, height / 2 - 60, 60, 20, PI, TWO_PI);
	arc(width / 2 + 40, height / 2 - 60, 60, 20, PI, TWO_PI);
}

function draw() {
	background(220);
	drawSpaceBackground();
	// Draw hair first so it appears behind the face
	drawNeckAndClothes();
	drawHair();

	// Draw face
	fill(255, 224, 189);
	stroke(0);
	strokeWeight(2);
	ellipse(width / 2, height / 2, 200, 250);

	// Draw eyes
	fill(255);
	ellipse(width / 2 - 40, height / 2 - 30, 50, 20);
	ellipse(width / 2 + 40, height / 2 - 30, 50, 20);
	fill(0);
	ellipse(width / 2 - 40, height / 2 - 30, 20, 20);
	ellipse(width / 2 + 40, height / 2 - 30, 20, 20);

	// Draw nose reciprocal
	fill(255, 200, 150);
	triangle(width / 2, height / 2 - 10, width / 2 - 10, height / 2 + 20, width / 2 + 10, height / 2 + 20);
	// Draw beard
	drawPimples();
	drawBeard();

	// // Draw mouth
	drawMouth();


	// Draw glasses on top
	drawGlasses();
	drawEyebrows();

	// Draw neck and clothes last so they appear in front

	// save the frame as an image
	noLoop(); // Stop the draw loop to save only once
}

