DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
  v_result NUMBER;
BEGIN
  v_start := SYSTIMESTAMP;

  SELECT BLOOD_GLUCOSE_LEVEL INTO v_result
  FROM DIABETES
  WHERE ID = 1;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Select execution time: ' || v_diff);
END;
