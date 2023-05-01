let d = new Date();
let time = d.toLocaleTimeString();

setInterval(callback, 1000, time);

funciton callback(t) {
	console.log(t);
}
