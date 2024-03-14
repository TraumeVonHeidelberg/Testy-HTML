const squareItem = document.getElementById('square')
const shiftManipulation = document.getElementById('shiftManipulation')

let shiftX = 0
let shiftY = 0
let rotate = 0

let shiftValue = Number(shiftManipulation.value)

document.addEventListener('keydown', event => {
	console.log(event)

	if (event.key === 'ArrowDown' || event.key === 's') {
		shiftY += shiftValue
	} else if (event.key === 'ArrowUp' || event.key === 'w') {
		shiftY -= shiftValue
	} else if (event.key === 'ArrowLeft' || event.key === 'a') {
		shiftX -= shiftValue
	} else if (event.key === 'ArrowRight' || event.key === 'd') {
		shiftX += shiftValue
	} else if (event.key === ' ') {
		rotate += shiftValue
	} else if (event.key === 'r') {
		shiftX = 0
		shiftY = 0
		rotate = 0
	}
	squareItem.style.transform = `translate(${shiftX}px,${shiftY}px) rotate(${rotate}deg)`
})

document.addEventListener('input', () => {
	shiftValue = Number(shiftManipulation.value)
})

document.addEventListener('keydown', event => {
	if (event.key === 'r') {
		shiftManipulation.value = 50
		shiftValue = Number(shiftManipulation.value)
	}
})
