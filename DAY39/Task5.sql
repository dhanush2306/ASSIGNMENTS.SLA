DELIMITER $$

CREATE PROCEDURE UpdateStudentPhone(
    IN p_student_id INT, 
    IN p_new_phone VARCHAR(20)
)
BEGIN
    UPDATE students
    SET phone = p_new_phone
    WHERE student_id = p_student_id;
END $$

DELIMITER ;