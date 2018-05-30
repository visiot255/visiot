Hello there
===========

Packages installed :
--------------------
node

express

ejs

path

cookie-parser

body-parser


Code structure :
----------------
**app.js** is the main file. It redirects according to the path (/resources, /...)
It 'calls' the **routers** which are in charge avec making post and get requests depending on the situation.
If needed it calls a **controller** that usually creates a new instance and saves it in the database.
Finally routers call one the **views** files, giving an html file to the browser.

For now there is neither model for articles nor a database to store them.


Remarks:
--------
page to add articles <url>/addarticles. Will be accessible by login password in the future.
