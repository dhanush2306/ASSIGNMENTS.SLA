SELECT 
    roll_number,
    LPAD(roll_number, 4, '0') AS formatted_roll
FROM students;