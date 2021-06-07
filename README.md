# TechShop

This is a pilot project created during Endava Internship and should look like a CRUD Dashboard. 

# Topic

We will have brand categories(ex: Apple, Samsung, Asus) and products(laptops & phones) by each category.

## Requiremenets

Requirements (points 1-7 are mandatory, point 8 is not mandatory):
- The DB must contain a minimum of 2 tables
- Standard functionalities (Create, Delete, Edit)
- Search by name and category
- Filter and sort
- UI and UX friendly
- Field and data validations
- Add the project to AWS
- Nice to have what you want to add.

## Development

For this project we use XAMPP. 

1. Open XAMPP and start Apache and MySQL
2. Clone this repo into your XAMPP folder, ex: `/C/xampp/htdocs/`
3. Open phpmyadmin
4. Create `techshop` database
5. Import database from `techshop.sql`
6. Set environment variables at the end of file `/C/xampp/apache/conf/httpd.conf` 
```
# techshopenvs
SetEnv TECHSHOP_HOST localhost
SetEnv TECHSHOP_USER root
SetEnv TECHSHOP_PASSWORD ''
SetEnv TECHSHOP_DB_NAME techshop
```
## Production

- Make sure environments variables are set in AWS environment

## Libraries

- For layout we use http://flexboxgrid.com
