//controller to retrieve student list
function stdsearch() {
  var st_elm = document.getElementById("buttonId");

  st_elm.addEventListener("click", function(event) {
    var ln = document.getElementById("formInput").value;

    var model_obj = new DataModel();
    var data = model_obj.getAll();
    var st_res = search_Student(ln);

    var v_obj = new Result(data);
    v_obj.searchstdRes(st_res);
  });
}

window.addEventListener("load", function(event) {
  stdsearch();
});

//Logic to retrieve student list
function search_Student(s_data){
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
  return result;
}

//controller to retrieve course details
function courseSearch(id) {
  var st_elm = id;

  var model_obj = new DataModel();
  var data = model_obj.getAll();
  var c_res = search_grade(st_elm);

  var v_obj = new Result(data);
  v_obj.searchCrsRes(c_res);
}

//Logic to retrieve course details
function search_grade(c_data){
  var course = { courses: [] };
  var s_id = parseInt(c_data);
  var name = "";

  for (var i = 0, len = data.students.length; i < len; i++) {
    if (this.data.students[i].id === s_id) {
      for (var j = 0, len = this.data.students[i].course.length; j < len; j++) {
        course.courses.push({
          'name': this.data.students[i].fname + " " + this.data.students[i].lname,
          'course': this.data.students[i].course[j],
          'gpa': this.data.students[i].gpa[j]
        });
      }
      name = this.data.students[i].fname + " " + this.data.students[i].lname;
    }
  }
  return course;
}
