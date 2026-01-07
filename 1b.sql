DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
BEGIN
  v_start := SYSTIMESTAMP;

  -- UPDATE operation
  UPDATE STRESSLEVEL
  SET STRESS_LEVEL = 4, HEADACHE = 3
  WHERE ID = 2;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Update execution time: ' || v_diff);
END;
