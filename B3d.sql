DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
  v_count NUMBER;
BEGIN
  v_start := SYSTIMESTAMP;

  SELECT COUNT(*) INTO v_count
  FROM STRESSLEVEL
  WHERE STRESS_LEVEL = 3;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;
  DBMS_OUTPUT.PUT_LINE('Select time: ' || v_diff);
  DBMS_OUTPUT.PUT_LINE('Rows matched: ' || v_count);
END;
