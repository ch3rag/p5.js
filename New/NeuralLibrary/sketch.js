let nn;

function setup() {

	nn = new NeuralNetwork(2, 2, 2);
	let input = [1, 0];
	let target = [1, 0];
	nn.train(input, target);
	//let output = nn.feedForward(input);
	//.console.log(output);

}

function draw() {

}