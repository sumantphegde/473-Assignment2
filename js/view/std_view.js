
//Constructor
function Result(sdata) {
  this.data = sdata;
}

//function to retrieve students list using last name
Result.prototype.searchstdRes = function(s_data) {
  var source_std = document.getElementById("stdTemplate").innerHTML;
  var template_std = Handlebars.compile(source_std);
  var output_std;
  var result = { students: [] };
  var name = s_data;
  for (var i = 0, len = this.data.students.length; i < len; i++) {
    if (this.data.students[i].lname.toUpperCase() === name.toUpperCase()) {
      result.students.push({
        id: this.data.students[i].id,
        fname: this.data.students[i].fname,
        lname: this.data.students[i].lname
      });
    }
  }
  output_std = template_std(result);
  document.getElementById("list").innerHTML = output_std;
  document.getElementById("tbl").innerHTML = "";
};

//function to retrieve selected student details
var aTags = document.getElementsByTagName("a");
Result.prototype.searchCrsRes = function(s_data) {
  var source_cr = document.getElementById("stdTemplate2").innerHTML;
  var template_cr = Handlebars.compile(source_cr);
  var output_cr;
  var course = { courses: [] };
  var s_id = parseInt(s_data);
  var name = "";
  for (var i = 0, len = data.students.length; i < len; i++) {
    if (this.data.students[i].id === s_id) {
      for (var j = 0, len = this.data.students[i].course.length; j < len; j++) {
        course.courses.push({
          course: this.data.students[i].course[j],
          gpa: this.data.students[i].gpa[j]
        });
      }
      name = this.data.students[i].fname + " " + this.data.students[i].lname;
    }
  }
  output_cr = template_cr(course);
  document.getElementById("tbl").innerHTML = output_cr;
  document.getElementById("grade").innerHTML = "Grades for " + name;
  course = { courses: [] };
};
