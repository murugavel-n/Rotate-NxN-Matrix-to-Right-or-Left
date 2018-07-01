function generateMatrixArray(rowsCols) {
	let matrixArray = [];
	for(let i = 0; i < rowsCols; i++) {
		let rowsArray = []
		for(let j = 0; j < rowsCols; j++) {
			rowsArray.push(Math.round(Math.random() * 9))
		}
		matrixArray.push(rowsArray)
	}
	return matrixArray;
}
function printArray(input) {
	for(let i = 0; i < input.length; i++) {
		console.log(input[i].join('    '))
	}
}
function rotateMatrixArray(inputMatrixArray, flag) {
	console.log('input: \n------------\n')
	printArray(inputMatrixArray)
	const N = inputMatrixArray.length - 1;
	console.log('output: \n------------\n')
	printArray(inputMatrixArray.map((row, i) => row.map((col, j) => flag === 1 ? inputMatrixArray[N - j][i] : inputMatrixArray[j][N - i])))
}
rotateMatrixArray(generateMatrixArray(3), 0)
rotateMatrixArray(generateMatrixArray(4), 1)
