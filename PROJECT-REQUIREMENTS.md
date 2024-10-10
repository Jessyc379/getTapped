# Project Requirements

Here's a summary of the capabilities of getTapped, the gathering place for all beer lovers alike!

## Homepage
- The landing page must have a brewery-like feel to it: put beer and people to create a sense of community and bonding! Beer lovers unite!
- Include a small blurb about the purpose of getTapped: a central platform for reaching breweries or for managing your own breweries
- Link to the breweries page

## Brewers
- Brewer dashboard is visible only to brewers
- Dashboard containing all information: basic brewer information, all of their breweries, and the option to add more breweries
- View breweries owned and have editing rights on existing breweries, in the event that brewery information changes
- Add new breweries when expanding existing franchises or if they experience a ton of success
- Not all fields are required when filling out brewery information
- If brewers ever change their mind about updating or adding breweries, they have the option of canceling, which will navigate them back to their brewer dashboard

## Header
- Visible on all pages and is fixed (same size, same location)
- Prompts user to sign in/log out
- Welcome our user by their username
- Users can navigate home by hitting the "Home" button or by tapping our app name "getTapped"
- Some contents vary, depending on the user's role (ie. a customer can access their own profile, a brewer can access their own dashboard, and an admin can view all existing accounts on their own dashboard)

## Breweries
- Visible to everyone who accesses our application because people should have the option to see all breweries, even if they aren't current users or aren't logged in. Brewery information is publicly accessible information
- Each existing brewery has their own card, displaying their name, and what city & state they're located in
- Additional details about specific breweries are also available: they can see the type of brewery, the address of the brewery, the brewery phone number, the brewery website url (hyperlinked to the actual website), and existing reviews for that brewery
- Display reviews that each brewery has received, showing how many stars they were rated, what a customer said about the brewery, and when the review was published
- Users have the option of clicking into specific breweries to look at their details and can easily return to the main brewery page 
- Not all fields are required when filling out brewery information, and breweries are not required to be uploaded by brewers. Customers have the option of adding new breweries to our application, if they visited a brewery, even if they aren't an existing partner

## Administrators (Admin)
- Admin dashboard is visible only to admins
- Admins can view all existing breweries, brewers, and customers
- Admins can easily view the names and locations of all breweries
- Admins can easily see the brewer ID of brewers and how many breweries they own
- Admins can view how many reviews customers have and which breweries are their favorite

## Customers
- Customers have access to their own profiles when they're logged in
- They can view their username, customer ID, role (ROLE_USER), and their favorite breweries
- They can edit their username
- Their reviews are visible in descending chronological order, meaning the most recent reviews populate at the top
- Reviews hold information such as: brewery name, location (city, state), star rating, what the customer had to say about the brewery, and when the review was created.

## Login
- Users input their username and password to access their accounts
- Users cannot log in if their information is not filled in correctly
- Users cannot login if either of the fields are empty

## Registration
- Users fill out a form where they decide their username, password, and select their role as a user or admin
- Users cannot register if they don't fill out all the fields
- Users must confirm their password, and both instances of their input password must match
- If someone already has an account with us, they can switch back to the Login page to access our application