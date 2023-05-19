"use strict";

const students = [
	"Peter",
	"Andrew",
	"Ann",
	"Mark",
	"Josh",
	"Sandra",
	"Cris",
	"Bernard",
	"Takesi",
	"Sam",
];

function sortStudentsByGroups(arr) {
	arr.sort();
	let subarray = [];

	for (let i = 0; i < 3; i++) {
		subarray.push(arr.splice(0, 3));
	}

	subarray.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);

	console.log(subarray);
}

sortStudentsByGroups(students);
