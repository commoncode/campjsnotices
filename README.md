Conference Board w/ Chat @ CampJS
=================================

Getting Started
---------------

    $ curl https://install.meteor.com | /bin/sh
    $ git clone git@github.com:commoncode/notices.git
    $ cd mello
    $ meteor
    Running on: http://localhost:3000/

Notices
-------

+ Add collection
    - some sample fixtures
+ Setup templates
+ Setup helpers

Accounts
--------

    meteor add accounts-password
    meteor add accounts-ui

Add the code:

    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_ONLY'
    });


Add/remove notices
------------------

_Now that we have a user_

+ Add Notices
    - add form and event
+ Take Down Notice
    - add button for currentUserIsOwner

Messages
--------

_Add the ability to chat on the notices_

+ Add Messages


More to do?
===========

+ Message UI
+ Add Twitter accounts
    - Tweet out


