function doMathClicked () {
	// Ominous message
alert("I know you clicked the button. I know you didn't really do the math. You used Javascript for it, didn't you? You cheated. I don't want to do math with you anymore.")
  // this function does math!!
  document.getElementById('add-math').innerHTML = '75 + 43 =  ' + (75 + 43)
  document.getElementById('subtract-math').innerHTML = '342 - 203 =  ' + (342 - 203)
  document.getElementById('multiply-math').innerHTML = '87 + 103 * 333 =  ' + (87 + 103 * 333)
  document.getElementById('divide-math').innerHTML = '(533 / 342) + 53 =  ' + ((533 / 342) + 53)
  document.getElementById('exponent-math').innerHTML = '32 + 345 ** 3 =  ' + (32 + 345 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(327) = ' + Math.sqrt(327)
}