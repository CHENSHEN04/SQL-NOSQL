let start = Date.now();

db.DiabetesRecords.insertOne({
  _id: 1,
  year: 2020,
  gender: "Male",
  age: 45,
  location: "Kuala Lumpur",
  race_africanamerican: 0,
  race_asian: 1,
  race_caucasian: 0,
  race_hispanic: 0,
  race_other: 0,
  hypertension: 1,
  heart_disease: 0,
  smoking_history: "never",
  bmi: 28.5,
  hba1c_level: 6.2,
  blood_glucose_level: 140.0,
  diabetes: 1
});

let end = Date.now();
print("Insert execution time: " + (end - start) + " ms");
