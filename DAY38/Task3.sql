DELIMITER $$

CREATE PROCEDURE GetProductDetails(IN p_id INT)
BEGIN
    SELECT *
    FROM products
    WHERE product_id = p_id;
END $$

DELIMITER ;