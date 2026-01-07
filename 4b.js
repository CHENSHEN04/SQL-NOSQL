let start = Date.now();

db.DiabetesRecords.updateOne(
  { _id: 1 },
  { $set: { bmi: 30.0, diabetes: 0 } }
);

let end = Date.now();
print("Update execution time: " + (end - start) + " ms");
