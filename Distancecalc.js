/**function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}**/
function Calc()

{
	window.addEventListener('load', (event) => {
		console.log('  Starting initialization ')
		if (localStorage.getItem('guest')) {
		  document.querySelector('#guest').value = localStorage.getItem('guest')
		  console.log(`  Stored guest = ${localStorage.guest}`)
		}
		if (localStorage.getItem('radius1')) {
			document.querySelector('#number').value = parseInt(localStorage.radius1)
			console.log(`  Stored rad1 = ${localStorage.radius1}`)
		  }
		  console.log('  Finished initialization')
		})
    /** const radius=parseFloat(document.querySelector('#number').value)
     const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
     const ans = `${s}, your area is ${Math.PI * radius * radius}.`
     

     

     document.querySelector('#result').innerHTML = ans**/

    
}

	// document.querySelector('#addButton').addEventListener('click',Calc)
	 document.querySelector('#addButton').addEventListener('click', () =>
	 {
		console.log('  Starting clicker click handler')
		const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
		const s = document.querySelector('#guest').value
		console.log('s=' + s)
		//const i = parseInt(document.querySelector('#firstNumber').value)
		const radius=parseFloat(document.querySelector('#number').value)
		console.log('radius=' + radius)
		//const j = parseInt(document.querySelector('#secondNumber').value)
		//console.log('j=' + j)
		const ct = origCount + 1
		//const ans = `   ${s} , your sum is ${add(i,j)}. This has been run  ${ct}  times.`
		const ans = `${s}, your area is ${Math.PI * radius * radius}.This has been run  ${ct}  times.`
		document.querySelector('#result').innerHTML = ans
  
		localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
		localStorage.setItem('guest', s)
		localStorage.setItem('radius1', radius)
		//localStorage.setItem('number2', j)
		console.log('  Finished clicker click handler')
	  })
	// document.querySelector('#wiper').addEventListener('click',Calc)
	 document.querySelector('#wiper').addEventListener('click', () => {
		console.log('  Starting wiper click handler')
		localStorage.removeItem('countOfClicks')
		localStorage.removeItem('guest')
		localStorage.removeItem('radius1')
		//localStorage.removeItem('number2')
		console.log('  Finished wiper click handler - localStorage entries removed')
	  })
  
	  console.log('SCRIPT END')
  
	 //document.querySelector('#addButton').addEventListener('click',Calc)
	 function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		   document.getElementById("demo").innerHTML = this.responseText;
		  }
		};
		xhttp.open("GET", "info1.txt", true);
		xhttp.send();
	  }
