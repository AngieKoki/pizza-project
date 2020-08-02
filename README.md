# PIZZA VILLAGE PROJECT

## Project description
This is a web application where customers order different sizes of pizzas with one or more toppings.  

## Author
Angela Koki

## Setup instructions
Assuming you are already on github:

1. On the top right corner of your screen, you should see a button with the text 'Fork'
2. Click on this button to start the process of copying the project/repository to your own account.
3. You will be prompted to choose the account to which you want to fork.
4. Select your account name which should take you to the repo you forked in your account.
5. To know that the forking process is complete, check the top left corner of your repo.
6. You should be in your account in a repo with the same name as the original repository.This shows that the forking process is complete.
7. You can then proceed to clone it to make a copy in a location in your device
8. Open the terminal application. 
9. Navigate to your desired location from the terminal.
10. Run the command: git clone [remote url]
    *(remember to replace 'your-username' in the url with your GitHub username to prevent cloning the wrong repository)
11. Navigate to inside the cloned repository by using the change directory (cd) command. 
12. Open your editor by using the command atom . for Atom users or code . for Visual Studio    Code users.
    You are now ready to make modifications to the project you forked

## Known Bugs
No Known Bugs or dependencies

## BDD
### Feature:Select multiple Pizzas of the same order details
### Description
As a user
I want to select how many pizzas of the same order I want

### Scenarios
#### User selects yes to add a new order:

1. Given the user fills in the number of pizzas of the same pizza order 
2. When the user clicks on Submit
3. Then the application generates the total bill of the ordered pizzas

### Feature: Add an order for a different Pizza
### Description
As a user
I want to re-fill a form 
So that I can add an order for a different pizza

### Scenarios
#### User selects yes to add a new order:

1. Given the user selects yes to add a different pizza to the order
2. When the user clicks on Submit
3. Then the application generates a new form to fill in the details of the new order

#### User select no to add a new order:

1. Given the user selects no to add a different pizza to the order
2. Then the user will select if they want their order delivered or not
3. When the user clicks on Submit
4. Then the total bill will be outputted after.

### Feature: Yes to Delivery Option
### Description
As a user
I want to fill in a form to input my location
So that I can have my order delivered

### Scenarios
#### Location inputted:

1. Given the location is inputted
2. When the user clicks on Submit
3.  Then the application alerts the user that the order will be delivered to the specified location

#### Location is NOT inputted:

1. Given the name location is NOT inputted.  
2. When the user clicks on Submit
3. Then the application generates an error message to fill in the necessary field

### Feature: No to Delivery Option
### Description
As a user
I want to say no to the delivery option 
So that I can checkout and see the total

### Scenario
#### No is selected in the delivery option:

1. Given no is selected to the delivery option
2. When the user clicks on Submit
3.  Then the application generates the total amount to be paid

## Technologies used
I used: HTML CSS JavaScript jQuery and Bootstrap to create this application

## Contact information

Incase of any questions related to this project you can contact me at angie.dar66@gmail.com

## License and Copyright information 
MIT