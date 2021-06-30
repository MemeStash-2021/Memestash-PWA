![Memestash](./markdown/logo.png)

---

Welcome to the MemeStash PWA Repo. This PWA is to be used with one of the 2 back-ends of the Memestash project.

## Project contents
- [NodeJS API](https://github.com/BT-Creator/Memestash-NodeJS)
- [Laravel API](https://github.com/BT-Creator/Memestash-Laravel)
- [PWA](https://github.com/BT-Creator/Memestash-PWA)

## Setup
### Local
1. In `public/assets/js/config/config.js`, define the API URL that you want to use in the `apiURL`
### Firebase
You can also access the app online at [Firebase](https://memestash-pwa.web.app/search.html). Note that this uses the 
Laravel back-end, which doesn't haven't support for Push notifications
> It could be that the dynamic resources are immediately shown. This is because the back-end is asleep and needs time to be 
> reactivated.
## App
All the files of the PWA are located in `/public` directory
### Screens
|Screen|HTML?|CSS?|
|---|---|---|
|Home *(Index)*|`index.html`|`index.scss`|
|Search|`search.html`|`search.scss`|
|Collection|`collection.html`|`collection.scss`|
|Message Overview|`msg-overview.html`|`msg-overview.scss`|
|Message Conversation|`conversation.html`|`conversation.scss`|
|Card Overview|`card.html`|`card.scss`|
|Login|`login.html`|`login.scss`|
|Register|❌|❌|

### Functionalities
- Able to load user information on the home page
- Able to see the collection of a user
- Able to load the app offline
- Able to show the user's card offline
- Abme to show the user's profile offline
- Able to see the user's collection of cards, even when offline
- Able to inspect a card's details
- Able to buy a card
- Able to receive notifications about newly received cards *(Only when using the 
  [NodeJS](https://git.ti.howest.be/TI/2020-2021/s4/web-and-mobile-technology/students/bo-robbrecht/memestash/nodejs) Backend)*

## Directory structure
```
.
├── firebase.json -> used for FireBase Hosting
├── markdown -> Contains files for README.md
│   └── logo.png
├── public -> Main directory
│   ├── assets -> Contains all assets for the PWA
│   │   ├── css -> CSS files that are automatically compiled from the SCSS directory
│   │   │   ├── card.css
│   │   │   ├── collection.css
│   │   │   ├── conversation.css
│   │   │   ├── index.css
│   │   │   ├── msg-overview.css
│   │   │   ├── profile.css
│   │   │   ├── reset.css
│   │   │   ├── search.css
│   │   ├── icons -> Icons, such as flavicons, etc..
│   │   ├── js -> Contains all JavaScript files
│   │   ├── media -> Contains background imagery, etc...
│   │   └── scss -> Contains all SCSS files
│   │       ├── resources -> Contains reoccuring variables & mixin' properties
│   │       │   └── commons.scss
│   │       ├── modules
│   │       │   └── base.scss -> Contains base styling used on every page
│   │       ├── card.scss
│   │       ├── collection.scss
│   │       ├── conversation.scss
│   │       ├── index.scss
│   │       ├── msg-overview.scss
│   │       ├── profile.scss
│   │       ├── login.scss
│   │       └── search.scss
│   ├── images -> Contains large images & video's
│   ├── card.html
│   ├── collection.html
│   ├── conversation.html
│   ├── index.html
│   ├── msg-overview.html
│   ├── profile.html
│   ├── login.html
│   └── search.html
└── README.md
```
