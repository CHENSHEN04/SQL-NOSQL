DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
BEGIN
  v_start := SYSTIMESTAMP;

  UPDATE STRESSLEVEL
  SET STRESS_LEVEL = 5
  WHERE MOD(ID, 10) = 0;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;
  DBMS_OUTPUT.PUT_LINE('Update time: ' || v_diff);

END;
