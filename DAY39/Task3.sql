DELIMITER $$

CREATE PROCEDURE GetHighestSalary(OUT max_salary DECIMAL(10,2))
BEGIN
    SELECT MAX(salary) INTO max_salary
    FROM employees;
END $$

DELIMITER ;