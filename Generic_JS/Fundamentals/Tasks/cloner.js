function cloneObject(obj) {
	var key, copy;
	if (typeof obj !== 'object') {
		return obj;
	}

	copy = obj.constructor();

	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			copy[key] = cloneObject(obj[key]);
		}
	}

	return copy;
}

var sampleObject = {
	0: 1,
	length: 100,
	list: [23, 45, 56, 78],
	userName: "John Smith",
	props: {
		type: "simple",
		id: 1234
	}
};

cloneObject(sampleObject)