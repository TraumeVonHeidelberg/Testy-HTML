const squareItem = document.getElementById('square')

let shiftX = 0
let shiftY = 0
let rotate = 0

let shiftValue = 10

document.addEventListener('keydown', event => {
	console.log(event)

	if (event.key === 'ArrowDown') {
		shiftY += shiftValue
	} else if (event.key === 'ArrowUp') {
		shiftY -= shiftValue
	} else if (event.key === 'ArrowLeft') {
		shiftX -= shiftValue
	} else if (event.key === 'ArrowRight') {
		shiftX += shiftValue
	} else if (event.key === ' ') {
		rotate += shiftValue
	} else if (event.key === 'r') {
		shiftX = 0
		shiftY = 0
		rotate = 0
	}

	squareItem.style.transform = `translate(${shiftX}px,${shiftY}px rotate(${rotate}deg)`
})
