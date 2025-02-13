# Notes:
## AWS
### EC2
Used to launch server instance
In Virginia
Named jake-cs260-webserver
Public and elastic IP: 3.216.109.11

### Route 53
Used to register a domain name
"moodtracker.click"
Hosted Zone
A type records for the root and subdomain ("*.moodtracker.click")
Connects IP address to domain name (DNS)

### Caddy
Using git bash and editing the Caddyfile, website becomes secure http -> https
deployFiles.sh to post files to your domain
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon

## HTML
It is all about the structure.
Tags are important. 
Only focus on the structure and content.
Also includes forms and media.

## CSS
All about styling.
Spacing, fonts, colors, animations, alignment, etc.
Flex to make the adjusting of window size functional 

## React
make sure this is in package.json:
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }

add public and src folders
public hold favicon and other images used in app

src holds frontend React code, top level styles, and components
### Converting HTML and CSS
change class tag to className
change body tag in CSS to .body
take main content from html and put it into each component

app.jsx has header, routers for main content, and footer
Use NavLink instead of "a href"

don't forget to import

new deployfile
deployReact.sh

./deployReact.sh -k <yourpemkey> -h <yourdomain> -s simon