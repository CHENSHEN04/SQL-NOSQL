let start = Date.now();

let result = db.stressleveldata.find({ stress_level: 2 }).toArray();

let end = Date.now();
print("Select time: " + (end - start) + " ms");
print("Documents found: " + result.length);
