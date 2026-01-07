let start = Date.now();

db.stressleveldata.deleteMany({ stress_level: 5 });

let end = Date.now();
print("Delete time: " + (end - start) + " ms");
