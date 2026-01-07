let start = Date.now();

db.StressRecords.deleteOne({ _id: 2 });

let end = Date.now();
print("Delete execution time: " + (end - start) + " ms");
d)	Find select query time 
let start = Date.now();

let result = db.StressRecords.findOne({ _id: 1 });

let end = Date.now();
print("Select execution time: " + (end - start) + " ms");
printjson(result);
