// Variables
var t = document.getElementById("title");
var s = document.getElementById("spongebob");
var g = document.getElementById("gary");
var m = document.getElementById("mr.krabs");
var p = document.getElementById("pearl");
var w = document.getElementById("squidward");
var l = document.getElementById("squilliam");
var n = document.getElementById("plankton");
var k = document.getElementById("karen");
var ss = document.getElementById("Spongebob Sound");
var ms = document.getElementById("Mr. Krabs Sound");
var sq = document.getElementById("Squidward Sound");
var ps = document.getElementById("Plankton Sound");
var gs = document.getElementById("Gary Sound");
var pe = document.getElementById("Pearl Sound");
var sqs = document.getElementById("Squilliam Sound");
var ks = document.getElementById("Karen Sound");
var ts = document.getElementById("Theme_Song");
var imagea = 0
var imageb = 0
var imagec = 0
var imaged = 0
var imagee = 0
var imagef = 0
var imageg = 0
var imageh = 0
var imagei = 0

// Reset Button
function resetPage(){
    window.location.reload();
} 

// Images
function appear() {
	g.classList.add("show")
	g.classList.remove("hide")
	imagea = 1
	console.log(imagea)
	ss.play();
	revealdoodle()
}

function appear2() {
	p.classList.add("show")
	p.classList.remove("hide")
	imageb = 1
	console.log(imageb)
	ms.play();
	revealdoodle()
}

function appear3() {
	l.classList.add("show")
	l.classList.remove("hide")
	imagec = 1
	console.log(imagec)
	sq.play();
	revealdoodle()
}

function appear4() {
	k.classList.add("show")
	k.classList.remove("hide")
	imaged = 1
	console.log(imaged)
	ps.play();
	revealdoodle()
}

function sound() {
	gs.play();
	imagee = 1
	console.log(imagee)
	revealdoodle()
}

function sound2() {
	pe.play();
	imagef = 1
	console.log(imagef)
	revealdoodle()
}

function sound3() {
	sqs.play();
	imageg = 1
	console.log(imageg)
	revealdoodle()
}

function sound4() {
	ks.play();
	imageh = 1
	console.log(imageh)
	revealdoodle()
}

function music(){
	ts.play();
}
// After all character images have been clicked
function revealdoodle() {
if (imagea==1 && imageb==1 && imagec==1 && imaged==1 && imagee==1 && imagef==1 && imageg==1 && imageh==1) {
	s.src = ("images/Doodlebob.png")
	g.src = ("images/Doodlebob.png")
	m.src = ("images/Doodlebob.png")
	p.src = ("images/Doodlebob.png")
	w.src = ("images/Doodlebob.png")
	l.src = ("images/Doodlebob.png")
	n.src = ("images/Doodlebob.png")
	k.src = ("images/Doodlebob.png")
	
}
}