SELECT 
    hs.student_name,
    hs.marks,
    c.course_name
FROM high_scorers hs
JOIN courses c ON hs.student_id = c.student_id;