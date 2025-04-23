# Welcome to your Lovable project

## Project info

Generated using https://lovable.dev/

**URL**: https://lovable.dev/projects/9b6768fe-b7a2-4f7b-b83d-e5ebaf387dbf

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9b6768fe-b7a2-4f7b-b83d-e5ebaf387dbf) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Manually Edit**

Edit the code yourself or use chatgpt or any AI to make modification.

## Build ##

The default variables are used

DOMAIN = yanct.com
EMAIL = contact@yanct.com
WEBROOT = /var/www/$(DOMAIN)

Update them before building if you want a different domain for your web-page

<pre>
make all
</pre>

Open http://localhost/ and view the page. Make all will do the following

 - setup - install all tools e.g npm nginx certbot python3-certbot-nginx
 - build - install all npm dependencies and build
 - configure - configure nginx

To generate a cert run

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

