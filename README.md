# ngdb_project
Inventory for Online orders in NIT Trichy
Database type used is key value pair since we only have to store the location of warehouse in which the item corresponding to the order_id is present
Database used is redis
A proper naming convention for is followed to store the Customers information, Warehouse managers credentials and order_ids in order to uniquely identify each key

## Naming convention followed to store customers information
<p>
Customer has to register in order for him to use this application. 
He registers with a unique customer_id 
the keys created are as follows:-
</p>
<p>
The string "cust" is concatinated with cust_id with a seperator ':' and is concanitated with attribute name
</p>
<p>
for example A customer with cust_id Ahmd7 has first name Ahmed then
Key to store this would look like this 
</p>
"cust:Ahmd7:fname" with value Ahmed
<p>
  login credentials of customer are stored with key being "cust:cust_id" and corresponding value is password
</p>
Similarly for warehouse manager
<p>
  Following a proper naming convention guarantees a unique key for every attribute.
   This process is done in application code written in JavaScript
</p>

