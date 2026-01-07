let start = Date.now();

db.stressleveldata.insertOne({
  _id: "timing_insert_test",
  anxiety_level: 15,
  self_esteem: 14,
  mental_health_history: 1,
  depression: 0,
  headache: 2,
  blood_pressure: 120,
  sleep_quality: 3,
  breathing_problem: 0,
  noise_level: 1,
  living_conditions: 2,
  safety: 3,
  basic_needs: 2,
  academic_performance: 80,
  study_load: 4,
  teacher_student_relationship: 3,
  future_career_concerns: 2,
  social_support: 3,
  peer_pressure: 4,
  extracurricular_activities: 1,
  bullying: 0,
  stress_level: 3
});

let end = Date.now();
print("Insert time: " + (end - start) + " ms");
