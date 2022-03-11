function doMathClicked () {
	alert("I know you clicked the button. I know you didn't really do the math. You used Javascript for it, didn't you? You cheated. I don't want to do math with you anymore.")
  // this function does basic math
  document.getElementById('add-math').innerHTML = '6 + 5 = ' + (6 + 5)
  document.getElementById('subtract-math').innerHTML = '7 - 3 =  ' + (7 - 3)
  document.getElementById('multiply-math').innerHTML = '3 + 4 * 2 = ' + (3 + 4 * 2)
  document.getElementById('divide-math').innerHTML = '(4 / 2) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(81) = ' + Math.sqrt(81)
}