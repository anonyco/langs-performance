var Math_sqrt = Math.sqrt, Math_floor = Math.floor;

function get_primes7(n) {
	if (n < 2) { return []; }
	if (n == 2) { return [2]; }

	var s = [];
	for (var i = 3; i < n + 1; i += 2) {
		s.push(i);
	}

	var mroot = Math_floor(Math_sqrt(n));
	var half = s.length;
	var i = 0;
	var m = 3;

	while (m <= mroot) {
		if (s[i]) {
			var j = Math_floor((m*m-3)/2);   // int div
			s[j] = 0;
			while (j < half) {
				s[j] = 0;
				j += m;
			}
		}
		i = i + 1 | 0;
		m = (i<<1) + 3 | 0;
	}

	// due to a bug in node.js 4.3, we need to declare and init on separate lines
	// or else node.js performs about four times slower
	var res = [];
	res.push(2);

	for (var x = 0; x < s.length; x=x+1|0) {
		if (s[x]) {
			res.push(s[x]);
		}
	}
	return res;
}

var Date_now = Date.now;
var endTime = Date_now() + parseInt(process.env.RUN_TIME, 10) * 1000;
var log = "";

while (1) {
    var res = get_primes7(10000000);
    if (Date_now() < endTime) {
        log += "Found " + res.length + " prime numbers.\n";
    } else {
	log += "Found " + res.length + " prime numbers.";
        break;
    }
}
console.log( res );
