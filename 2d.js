let start = Date.now();

let result = db.StressRecords.findOne({ _id: 1 });

let end = Date.now();
print("Select execution time: " + (end - start) + " ms");
printjson(result);
