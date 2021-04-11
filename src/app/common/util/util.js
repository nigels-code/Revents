export function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createDataTree(dataset) {
	let hashtable = Object.create(null);
	dataset.forEach((arr) => (hashtable[arr.id] = { ...arr, childNodes: [] }));
	let dataTree = [];
	dataset.forEach((arr) => {
		if (arr.parentId) hashtable[arr.parentId].childNodes.push(hashtable[arr.id]);
		else dataTree.push(hashtable[arr.id]);
	});
	return dataTree;
}
