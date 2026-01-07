DECLARE
  v_start TIMESTAMP;
  v_end   TIMESTAMP;
  v_diff  INTERVAL DAY TO SECOND;
BEGIN
  v_start := SYSTIMESTAMP;

  DELETE FROM DIABETES
  WHERE ID = 1;

  v_end := SYSTIMESTAMP;
  v_diff := v_end - v_start;

  DBMS_OUTPUT.PUT_LINE('Delete execution time: ' || v_diff);
END;
