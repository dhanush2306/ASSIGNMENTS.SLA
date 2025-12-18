SELECT 
    order_id,
    quantity,
    price,
    CalculateTotalPrice(quantity, price) AS total_price
FROM orders;