let start = Date.now();

db.DiabetesRecords.deleteOne({ _id: 1 });

let end = Date.now();
print("Delete execution time: " + (end - start) + " ms");
