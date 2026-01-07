let start = Date.now();

db.StressRecords.insertOne({
  _id: 2,
  anxiety_level: 12,
  self_esteem: 15,
  mental_health_history: 0,
  depression: 1,
  headache: 3,
  blood_pressure: 120,
  sleep_quality: 4,
  breathing_problem: 0,
  noise_level: 2,
  living_conditions: 1,
  safety: 3,
  basic_needs: 2,
  academic_performance: 80,
  study_load: 6,
  teacher_student_relationship: 4,
  future_career_concerns: 2,
  social_support: 3,
  peer_pressure: 5,
  extracurricular_activities: 1,
  bullying: 0,
  stress_level: 2
});

let end = Date.now();
print("Insert execution time: " + (end - start) + " ms");
