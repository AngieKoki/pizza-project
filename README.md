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
### Feature: 
### Description
As a user
I want to input my name, birthday and select my gender
So that I can get an Akan Name

### Scenarios
#### Name and birthday inputted and gender selected:

1. Given the name is inputted
2.    and birthday is inputted
3.    and gender is selected
4. When the user clicks on Submit
5. Then the application generates a valid Akan name

#### Name and Birthday inputted and gender NOT selected:

1. Given the name is inputted
2.   and birthday is inputted
3.   and gender is  NOT selected
4. When the user clicks on Submit
5. Then the application generates an error message to fill in the necessary field

#### Name inputted and gender selected but birthday not inputted:

1. Given the name is inputted
2.  and gender is selected
3.  and birthday is NOT inputted
4. When the user clicks on Submit
5. Then the application generates an error message to fill in the necessary field

#### Name inputted but gender NOT selected and birthday NOT inputted:

1. Given the name is inputted
2.  and gender is NOT selected
3.  and birthday is NOT inputted
4. When the user clicks on Submit
5. Then the application generates an error message to fill in the necessary fields

#### No input in any field:

1. Given no input in any field
2. When the user clicks on Submit
3. Then the application generates an error message to fill in the necessary fields

## Technologies used
I used: HTML CSS JavaScript jQuery and Bootstrap to create this application

## Contact information

Incase of any questions related to this project you can contact me at angie.dar66@gmail.com

## License and Copyright information 
MIT