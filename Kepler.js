class Planet {
	constructor(t, a, e=0.0, p0=0.0) {
		this.t = t;	// Umlaufzeit
		this.a = a;	// Große Halbachse
		this.e = e;	// Lineare Exzentrizität
		this.p0 = p0;	// Phasenverschiebung
		this.orbitData = [];
	}

	// calculateOrbit => should calcuĺate half of the ellipsis and store it to this.orbitData
	// get
}

var solarSystem = {
	planets : [],

	physicsTick : function() {

	}
}

var renderer = {
	canvas : document.getElementById("cvMain"),
	scale : 1,

	draw : function() {

	}
}

// var id = setInterval(function () {
// 	physicsTick();
// 	draw();
// }, 100);


document.getElementById("inWidth").addEventListener("input", function() {
	var width = this.value * 10 + 100
	document.getElementById("outWidth").innerHTML = width;
	document.getElementById("cvMain").width = width;
});

document.getElementById("inHeight").addEventListener("input", function() {
	var height = this.value * 10 + 100;
	document.getElementById("outHeight").innerHTML = height;
	document.getElementById("cvMain").height = height;

});

document.getElementById("inScale").addEventListener("input", function() {
	var scale = 10**(this.value / 10 - 5);
	var scaleText = scale.toExponential(3);
	document.getElementById("outScale").innerHTML = scaleText;
	renderer.scale = scale;

});

document.getElementById("inWidth").dispatchEvent(new Event("input"));
document.getElementById("inHeight").dispatchEvent(new Event("input"));
document.getElementById("inScale").dispatchEvent(new Event("input"));