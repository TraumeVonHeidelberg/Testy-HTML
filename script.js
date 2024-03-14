const squareItem = document.getElementById('square')

let shiftX = 0
let shiftY = 0

document.addEventListener('keydown', event => {
	console.log(event)

	if (event.key === 'ArrowDown') {
		shiftY += 10
	} else if (event.key === 'ArrowUp') {
		shiftY -= 10
	} else if (event.key === 'ArrowLeft') {
		shiftX -= 10
	} else if (event.key === 'ArrowRight') {
		shiftX += 10
	}

	console.log(window.screen.width)

	squareItem.style.transform = `translate(${shiftX}px,${shiftY}px`
})
