const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:21/student")
  .then(() => {
    console.log("Server connect successfully");
  })
  .catch((e) => {
    console.log("error in connection", e);
  });

const academicSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  grade: String,
  subject: String,
});
const AcademicModel = mongoose.model("Academic", academicSchema);

const createAcademic = async () => {
  try {
    const allAcademic = await AcademicModel.create([
      { studentId: 1, name: "Niraj", grade: "O+", subject: "Coding" },
      { studentId: 2, name: "Niki", grade: "A", subject: "Coding" },
      { studentId: 3, name: "Ashish", grade: "A+", subject: "Coding" },
      { studentId: 4, name: "Nikhil", grade: "O", subject: "Coding" },
    ]);
  } catch (error) {
    console.log("error while creating Academic Model", error);
  }
};
createAcademic();

const getacademic = async () => {
  const academicresult = await AcademicModel.find();
  console.log(academicresult);
};
getacademic();

const curricularSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  activityType: String,
  Duration: String,
  achievements: String,
});

const CurricularModel = new mongoose.model("Curricular", curricularSchema);

const createCurricular = async () => {
  try {
    const allCurricular = await CurricularModel.create([
      {
        studentId: 1,
        name: "Niraj",
        activityType: "Coding",
        Duration: "3rd Year",
        achievements: "1St",
      },
      {
        studentId: 2,
        name: "Niki",
        activityType: "Presentation",
        Duration: "2nd Year",
        achievements: "4th",
      },
      {
        studentId: 3,
        name: "Ashish",
        activityType: "Writing",
        Duration: "1st Year",
        achievements: "2nd",
      },
      {
        studentId: 4,
        name: "Nikhil",
        activityType: "Riding",
        Duration: "4th Year",
        achievements: "1St",
      },
    ]);
  } catch (error) {
    console.log("error while createing curricular Model", error);
  }
};
createCurricular();

const getCurricular = async () => {
  const curricularResult = await CurricularModel.find();
  console.log(curricularResult);
};
getCurricular();
