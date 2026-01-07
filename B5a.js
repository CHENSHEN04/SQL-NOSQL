let start = Date.now();

db.stressleveldata.insertOne({
  _id: "timing_insert_50k",
  anxiety_level: 16,
  self_esteem: 15,
  mental_health_history: 1,
  depression: 0,
  headache: 2,
  blood_pressure: 125,
  sleep_quality: 4,
  breathing_problem: 0,
  noise_level: 2,
  living_conditions: 3,
  safety: 2,
  basic_needs: 3,
  academic_performance: 85,
  study_load: 3,
  teacher_student_relationship: 4,
  future_career_concerns: 2,
  social_support: 3,
  peer_pressure: 4,
  extracurricular_activities: 1,
  bullying: 0,
  stress_level: 3
});

let end = Date.now();
print("Insert time: " + (end - start) + " ms");
