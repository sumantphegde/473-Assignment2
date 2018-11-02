// sets variable source to the animalTemplate id in index.html
var source = document.getElementById("stdTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

var data = getData();

var output;

function search() {
  var name= document.getElementById("formInput").value;
  var result = {students:[]};
  for (var i = 0,len = data.students.length; i < len; i++) {
        if ( data.students[i].lname === name ) { // strict equality test
        result.students.push(data.students[i].fname + " "+data.students[i].lname);
        }
    }
    output = template(result);
    document.getElementById("list").innerHTML = output;
}
