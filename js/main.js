console.log("todo Ok! Denny");
const suma = (...n)=>{
	let sumatorio = 0;
	n.forEach((dato) => sumatorio += dato);
	return sumatorio;
}
console.log(suma(1,2,3,4,5));