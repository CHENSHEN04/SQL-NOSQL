let originalDocs = db.stressleveldata.find().toArray();

if (originalDocs.length === 0) {
  print("Collection is empty — nothing to clone.");
} else {
  for (let i = 1; i <= 8; i++) {
    let clone = originalDocs.map(doc => {
      let newDoc = { ...doc };
      newDoc._id = doc._id + "_copy" + i;  // Ensure each _id is unique
      return newDoc;
    });
    db.stressleveldata.insertMany(clone);
    print("Inserted batch " + i);
  }
}
