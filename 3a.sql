DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
BEGIN
  v_start := SYSTIMESTAMP;

  INSERT INTO DIABETES (
    ID, YEAR, GENDER, AGE, LOCATION,
    RACE_AFRICANAMERICAN, RACE_ASIAN, RACE_CAUCASIAN, RACE_HISPANIC, RACE_OTHER,
    HYPERTENSION, HEART_DISEASE, SMOKING_HISTORY,
    BMI, HBA1C_LEVEL, BLOOD_GLUCOSE_LEVEL, DIABETES
  )
  VALUES (
    1, 2020, 'Male', 45, 'Kuala Lumpur',
    0, 1, 0, 0, 0,
    1, 0, 'never',
    28.5, 6.2, 140.0, 1
  );

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Insert execution time: ' || v_diff);
END;
