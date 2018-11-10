//controller to retrieve student list
function stdsearch() {
  var st_elm = document.getElementById("buttonId");

  st_elm.addEventListener("click", function(event) {
    var ln = document.getElementById("formInput").value;

    var model_obj = new DataModel();
    var data = model_obj.getAll();

    var v_obj = new Result(data);
    v_obj.searchstdRes(ln);
  });
}

window.addEventListener("load", function(event) {
  stdsearch();
});

//controller to retrieve course details
function courseSearch(id) {
  var st_elm = id;

  var model_obj = new DataModel();
  var data = model_obj.getAll();

  var v_obj = new Result(data);
  v_obj.searchCrsRes(st_elm);
}
