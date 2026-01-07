let originalDocs = db.stressleveldata.find().toArray();

if (originalDocs.length === 0) {
  print("No documents to clone.");
} else {
  for (let i = 1; i <= 4; i++) {
    let clone = originalDocs.map(doc => {
      let newDoc = { ...doc };
      newDoc._id = doc._id + "_copy50k_" + i;  // Ensure unique _id
      return newDoc;
    });
    db.stressleveldata.insertMany(clone);
    print("Cloned batch " + i);
  }
}

db.stressleveldata.countDocuments();
