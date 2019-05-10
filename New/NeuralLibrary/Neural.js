function sigmoid(x) {
    return (1 / (1 + Math.exp(-x)));
}

class NeuralNetwork {
    // CONSTRUCT A NEURAL NETWORK WITH 3 LAYERS

    constructor(inputs, hidden, output) {
        this.inputNodes = inputs;
        this.hiddenNodes = hidden;
        this.outputNodes = output;

        this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes);
        this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes);
        this.weightsHO.randomize();
        this.weightsIH.randomize();

        this.biasH = new Matrix(this.hiddenNodes, 1);
        this.biasO = new Matrix(this.outputNodes, 1);

        this.biasH.randomize();
        this.biasO.randomize();
    }              

    feedForward(inputArr) {
        
        let inputs = Matrix.fromArray(inputArr);
        let hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden.add(this.biasH);
        // ACTIVATION FUNCTION
        hidden.map(sigmoid);

        let outputs = Matrix.multiply(this.weightsHO, hidden);
        outputs.add(this.biasO);
        outputs.map(sigmoid);
        
        return outputs.toArray();
    }   


    train(inputs, answers) {
        
        let outputs = Matrix.fromArray(this.feedForward(inputs));
        let targets = Matrix.fromArray(answers);

        let outputErrors = Matrix.subtract(targets, outputs);

        let weightsHOTranspose = Matrix.transpose(this.weightsHO);
        let hiddenErrors = Matrix.multiply(weightsHOTranspose, outputErrors);
        

    }
}