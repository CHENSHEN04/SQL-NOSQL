
SQL vs NoSQL Performance Comparison (Oracle APEX vs MongoDB)
This repository contains the full set of scripts and code used for the Database Management Systems Final Assessment. The project compares performance, scalability, and data integrity between a SQL-based system (Oracle APEX) and a NoSQL-based system (MongoDB).

🔍 Project Scope

The comparison focuses on:

Performance Benchmarks and Query Speed
Using two datasets from Kaggle:

StressLevel Dataset (~1,000 rows)
Diabetes Dataset (~100,000 rows)
CRUD operations (Insert, Update, Delete, Select) were executed in both Oracle and MongoDB, and latency was recorded.

Scalability Testing
The StressLevel dataset was cloned to scale from 1k → 10k → 50k → 100k rows. We evaluated how the operation speed changes with growing data volumes.

Data Integrity and Consistency

We tested both databases using:

Insert with missing fields
Insert with wrong data types
Insert duplicate primary keys
Insert out-of-range values

Oracle enforced schema rules strictly; MongoDB was more flexible unless validation was enabled.

📊 Performance Testing Notes

Oracle scripts were tested using SQL Workshop in APEX.
MongoDB scripts were executed via Compass and pymongo.
Timing was recorded using built-in measurement tools and Python timestamps.

🧪 How to Use

Open the respective folder (oracle_apex or mongodb)
Load and run scripts in your environment
.sql files: Run in Oracle SQL Developer or APEX SQL Workshop
.js files: Use in MongoDB shell or Compass Script Editor

🔗 Dataset Sources

StressLevel Dataset
Diabetes Dataset

🧾 Report Link

Refer to the final report submitted for full results, charts, and interpretation of findings.
