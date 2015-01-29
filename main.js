var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];
	
// for (var i = 0; i < students.length; i++) {
	
// 	console.log(students[i]['age']);

// };

// students.map(function(stu){
// 	console.log(stu.age);
// });


// // 2
// students.map(function(stu){
// 	console.log(stu.name + " lives in " + stu.city)
// })




// // 3

// var j = 0;
// students.filter(function(stu){
// 	j++;
// 	if(j===1||j===3||j===4){
// 		console.log(stu.name + " lives in " + stu.city);
// 	}
// });




// 4

students.filter(function(stu){

	if (stu.age>25){
		console.log(stu.name + " is older than 25")
	}

})



