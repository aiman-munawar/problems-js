const map1 = new Map([
	[1, 2],
	[2, 3],
	[4, 5]
]);

const arr = Array.from(map1);
const serialized = JSON.stringify(arr);

console.log(serialized);
