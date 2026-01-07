let start = Date.now();

db.stressleveldata.updateMany(
  { stress_level: 3 },
  { $set: { stress_level: 5 } }
);

let end = Date.now();
print("Update time: " + (end - start) + " ms");
