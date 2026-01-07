let start = Date.now();

db.StressRecords.updateOne(
  { _id: 2 },
  { $set: { stress_level: 5, headache: 4 } }
);

let end = Date.now();
print("Update execution time: " + (end - start) + " ms");
