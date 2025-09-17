const sum = (...nums) =>
	nums.filter(x => typeof x === 'number' && !isNaN(x))
			.reduce((acc, val) => acc + val, 0);

const avg = (...nums) => {
	const valid = nums.filter(x => typeof x === 'number' && !isNaN(x));
	if (valid.length === 0) return 0;
	return +(valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(2);
};

console.log('sum(1,2,3):', sum(1,2,3,));
console.log("sum(1,'x',4):", sum(1,'a',4));
console.log('avg(1,2,3,4):', avg(1,2,3,4));
console.log('avg():', avg());
