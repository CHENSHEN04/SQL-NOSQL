let.originalDocs = 

db.stressleveldata.find().limit(10000).toArray();

if (originalDocs.length === 0) {
  print("No documents found to clone.");
} else {
  for (let i = 1; i <= 5; i++) {
    let clone = originalDocs.map(doc => {
      let newDoc = { ...doc };
      newDoc._id = doc._id + "_copy100k_" + i;  // Unique _id for each copy
      return newDoc;
    });
    db.stressleveldata.insertMany(clone);
    print("Cloned batch " + i);
  }
}
