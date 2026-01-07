DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
  v_dummy NUMBER;
BEGIN
  v_start := SYSTIMESTAMP;

  -- Your SELECT query (fetching into a variable)
  SELECT STRESS_LEVEL INTO v_dummy
  FROM STRESSLEVEL
  WHERE ID = 1;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Select execution time: ' || v_diff);
END;
