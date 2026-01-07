let start = Date.now();

db.stressleveldata.deleteMany({ stress_level: 6 });

let end = Date.now();
print("Delete time: " + (end - start) + " ms");
