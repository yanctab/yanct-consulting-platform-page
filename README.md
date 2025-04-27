# Welcome to your Lovable project

## Project info

Generated using https://lovable.dev/

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9b6768fe-b7a2-4f7b-b83d-e5ebaf387dbf) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Manually Edit**

Edit the code yourself or use chatgpt or any AI to make modification. Each section is defined in src/components and
can easily be paset in an AI chat where you can request changed to the code. Past it and build it.

## Build ##

The default variables are used

DOMAIN = yanct.com
EMAIL = contact @ yanct.com
WEBROOT = /var/www/$(DOMAIN)

Update them before building if you want a different domain for your web-page

<pre>
make all
</pre>

Open http://localhost/ and view the page. Make all will do the following

 - setup - install all tools e.g npm nginx certbot python3-certbot-nginx
 - build - install and setup everything needed to deploy the one-pager
 - configure - configure nginx and restart

This has been tested on Ubuntu 24.04. To deploy in production generate
the cert by running

<pre>
make obtain-ssl
</pre>

To renew the ssl run

<pre>
make renew-ssl
</pre>

For more information even though I think I have covered it all already run

<pre>
make help
</pre>

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- npm
- ngnxi
- certbot
- ubuntu

