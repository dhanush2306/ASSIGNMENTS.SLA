SELECT 
    DATEDIFF(
        DATE(CONCAT(YEAR(CURDATE()) + (DATE_FORMAT(birthdate, '%m-%d') < DATE_FORMAT(CURDATE(), '%m-%d')), '-', DATE_FORMAT(birthdate, '%m-%d'))),
        CURDATE()
    ) AS days_until_birthday
FROM employees
WHERE id = 1;