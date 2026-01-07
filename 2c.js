let start = Date.now();

db.StressRecords.deleteOne({ _id: 2 });

let end = Date.now();
print("Delete execution time: " + (end - start) + " ms");

