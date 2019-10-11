QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST Calc', assert => {
  assert.equal(Calc( 1), 3.141592653589793, 'Positive integers')
  assert.equal(Calc(-1), 3.141592653589793, 'Negative integers')
  assert.equal(Calc(0), 0, 'Zero values')
  assert.equal(Calc(-2),12.566370614359172, 'Negative integers')
  assert.equal(Calc(2),12.566370614359172, 'positive integers')
  //assert.equal(add(-1, 1), 0, 'Mixed')
})

QUnit.config.autostart = false  // sync = false; start after loading html

function Calc(radius){
    return Math.PI * radius * radius
}



window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -1;
  assert.equal(input.value, -1, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})
