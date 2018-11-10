//array to store student details
var data = {
  students: [{
      id: 1,
      fname: "John",
      lname: "Hedge",
      course: ["CPSC 473", "CPSC 476", "CPSC 589", "CPSC 548"],
      gpa: ["3", "3", "4", "3.5"]
    },
    {
      id: 2,
      fname: "Michael",
      lname: "Wahn",
      course: ["CPSC 440", "CPSC 476", "CPSC 589", "CPSC 548"],
      gpa: ["3", "3", "4", "3.5"]
    },
    {
      id: 3,
      fname: "Joe",
      lname: "Hedge",
      course: ["CPSC 476", "CPSC 583", "CPSC 589", "CPSC 548"],
      gpa: ["3", "3", "4", "2.5"]
    },
    {
      id: 4,
      fname: "Joe",
      lname: "Smith",
      course: ["CPSC 462", "CPSC 476", "CPSC 558", "CPSC 548"],
      gpa: ["3", "3", "4", "4"]
    },
    {
      id: 5,
      fname: "John",
      lname: "Smith",
      course: ["CPSC 473", "CPSC 476", "CPSC 589", "CPSC 548"],
      gpa: ["3", "3", "4", "3"]
    },
    {
      id: 6,
      fname: "Michael",
      lname: "Hedge",
      course: ["CPSC 440", "CPSC 462", "CPSC 531", "CPSC 548"],
      gpa: ["4", "3", "4", "4"]
    },
    {
      id: 7,
      fname: "Amy",
      lname: "Gonzalez",
      course: ["CPSC 440", "CPSC 462", "CPSC 531", "CPSC 548"],
      gpa: ["3.1", "3.9", "4", "4"]
    },
    {
      id: 8,
      fname: "Brett",
      lname: "Gonzalez",
      course: ["CPSC 382", "CPSC 462", "CPSC 542", "CPSC 548"],
      gpa: ["4", "3.5", "4", "3.8"]
    },
    {
      id: 9,
      fname: "Gio",
      lname: "Gonzalez",
      course: ["CPSC 551", "CPSC 532", "CPSC 589", "CPSC 548"],
      gpa: ["4", "3.2", "3.6", "3.5"]
    },
  ]
};

//Constructor
function DataModel() {
  this.data = data;
}

//Function to get array data
DataModel.prototype.getAll = function() {
  return data;
}
