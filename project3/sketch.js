let height = 400;
let width = 600;
let bgColor = 220;
let new_color = false;

const drawSpaceBackground = () => {
	if (!new_color) {
		bgColor = color(255)
	}
	fill(bgColor);
	noStroke();

	for (let i = 0; i < 50; i++) {

		if (
			0 <= mouseX && mouseX <= width &&
				0 <= mouseY && mouseY <= height
		) {
			const angle = random(TWO_PI);
			const radius = random(0, 50);
			const x = mouseX + radius * cos(angle);
			const y = mouseY + radius * sin(angle);
			const size = random(5, 20);
			fill(bgColor);
			ellipse(x, y, size);
		} else {
			const x = random(width);
			const y = random(height);
			const size = random(5, 10);
			ellipse(x, y, size);
		}
	}
};

function setup() {
	mouseX = 9999999
	mouseY= 9999999
	createCanvas(600, 400);
}

const drawFace = () => {
	drawHair();
	drawNeck();
	fill(255, 224, 189);
	stroke(0);
	strokeWeight(2);
	ellipse(width / 2, height / 2, 200, 250);


	fill(255);
	ellipse(width / 2 - 40, height / 2 - 30, 50, 20);
	ellipse(width / 2 + 40, height / 2 - 30, 50, 20);
	fill(0);
	ellipse(width / 2 - 40, height / 2 - 30, 20, 20);
	ellipse(width / 2 + 40, height / 2 - 30, 20, 20);


	fill(255, 200, 150);
	triangle(width / 2, height / 2 - 10, width / 2 - 10, height / 2 + 20, width / 2 + 10, height / 2 + 20);
	drawPimples();
	drawBeard();
	drawEyebrows();
	drawMouth();

}

const drawGlasses = () => {
	fill(0, 0, 0, 50);
	stroke(0);
	strokeWeight(2);


	arc(width / 2 - 40, height / 2 - 30, 70, 70, 0, TWO_PI);
	arc(width / 2 + 40, height / 2 - 30, 70, 70, 0, TWO_PI);


	line(width / 2 - 5, height / 2 - 30, width / 2 + 5, height / 2 - 30);


	line(width / 2 - 75, height / 2 - 30, width / 2 - 100, height / 2 - 20);
	line(width / 2 + 75, height / 2 - 30, width / 2 + 100, height / 2 - 20);
}

const drawHair = () => {
	fill(0);
	noStroke();


	ellipse(width / 2, height / 2 - 100, 220, 180);
}

const drawBeard = () => {
	stroke(0);
	strokeWeight(1.5);


	const centerX = width / 2;
	const faceRadiusX = 100;
	const faceRadiusY = 125;
	const beardTopY = height / 2 + 80;
	const beardWidth = 85;

	for (let x = centerX - beardWidth; x <= centerX + beardWidth; x += 18) {

		const bottomY = (height / 2) + faceRadiusY * sqrt(1 - pow((x - centerX) / faceRadiusX, 2));

		if (beardTopY < bottomY) {
			line(x, beardTopY, x, bottomY);
		}
	}
}

const drawPimples = () => {

	fill(255, 180, 150)
	noStroke();

	ellipse(width / 2 + 25, height / 2 - 85, 5);
	ellipse(width / 2 - 40, height / 2 - 70, 4);
	ellipse(width / 2 - 10, height / 2 - 110, 5);
	ellipse(width / 2 + 50, height / 2 - 60, 4);
	ellipse(width / 2 - 90, height / 2 - 40, 5);



	ellipse(width / 2 - 65, height / 2 + 10, 6);
	ellipse(width / 2 - 50, height / 2 + 25, 4);
	ellipse(width / 2 - 80, height / 2 + 30, 5);


	ellipse(width / 2 + 70, height / 2 + 20, 5);
	ellipse(width / 2 + 55, height / 2, 4);
	ellipse(width / 2 + 85, height / 2 + 40, 6);


	ellipse(width / 2 - 30, height / 2 - 5, 4);


	ellipse(width / 2 - 15, height / 2 + 110, 5);
	ellipse(width / 2 + 25, height / 2 + 100, 4);
}


const drawMouth = () => {
	noFill();
	stroke(150, 0, 0);
	strokeWeight(3);
	arc(width / 2, height / 2 + 50, 80, 40, 0, PI);
}

function drawNeck() {
	stroke(0);
	strokeWeight(2);


	fill(255, 224, 189);

	rect(width / 2 - 35, height / 2 + 100, 70, 50);


	fill(70, 130, 180);

}

const drawClothe = () => {
	noStroke()
	fill(70, 130, 180); 
	quad(
		80, height,                     
		80, height / 2 + 180,           
		width / 2 - 60, height / 2 + 130, 
		width / 2 - 60, height           
	);

	quad(
		width / 2 + 60, height,         
		width / 2 + 60, height / 2 + 130,
		width - 80, height / 2 + 180,    
		width - 80, height                
	);

	rect(
		width / 2 - 60,
		height / 2 + 130,             
		120,                           
		100                             
	);

};

const drawEyebrows = () => {
	stroke(0);
	strokeWeight(17);
	noFill();


	arc(width / 2 - 40, height / 2 - 60, 60, 20, PI, TWO_PI);
	arc(width / 2 + 40, height / 2 - 60, 60, 20, PI, TWO_PI);
}

function draw() {
	background(220);
	drawSpaceBackground();

	if (!mouseIsPressed) {
		drawFace();
	}
	drawGlasses();
	drawClothe()

}

function keyPressed() {
	if (key === 'r') {
		bgColor = color(255, 0, 0); // 'R' 키를 누르면 빨간색으로 변경
	} else if (key === 'g') {
		bgColor = color(0, 255, 0); // 'G' 키를 누르면 녹색으로 변경
	} else if (key === 'b') {
		bgColor = color(0, 0, 255); // 'B' 키를 누르면 파란색으로 변경
	} else if (key === ' ') {
		bgColor = color(255); // 스페이스바를 누르면 흰색으로 변경
	} else if (key === 's') {
		saveCanvas('mySketch', 'png');
		saveGif('mySketch', 10,120);
	}
	new_color = true;
}

