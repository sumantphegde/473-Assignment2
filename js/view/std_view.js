
//Constructor
function Result(sdata) {
  this.data = sdata;
}

//function to retrieve students list using last name
Result.prototype.searchstdRes = function(s_data) {
  var source_std = document.getElementById("stdTemplate").innerHTML;
  var template_std = Handlebars.compile(source_std);
  var output_std;
  output_std = template_std(s_data);
  document.getElementById("list").innerHTML = output_std;
  document.getElementById("tbl").innerHTML = "";
}

//function to retrieve selected student details
Result.prototype.searchCrsRes = function(s_data) {
  var source_cr = document.getElementById("stdTemplate2").innerHTML;
  var template_cr = Handlebars.compile(source_cr);
  var output_cr;
  output_cr = template_cr(s_data);
  document.getElementById("tbl").innerHTML = output_cr;
  document.getElementById("grade").innerHTML = "Grades for " + s_data.courses[0].name;
}
