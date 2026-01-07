DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
BEGIN
  v_start := SYSTIMESTAMP;

  UPDATE DIABETES
  SET BMI = 30.0, DIABETES = 0
  WHERE ID = 1;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Update execution time: ' || v_diff);
END;
