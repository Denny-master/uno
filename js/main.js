console.log("todo Ok! Denny");
const DEFAULT_EXTS = 'html htm css js png gif jpg php php5 py rb erb coffee twig'.split(' ');
console.log(DEFAULT_EXTS,"OMGeeesssss!");
const suma = (...n)=>{
	let sumatorio = 0;
	n.forEach((dato) => sumatorio += dato);
	return sumatorio;
}
console.log(suma(1,2,3,4,5));