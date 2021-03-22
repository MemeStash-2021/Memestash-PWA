![Memestash](./markdown/logo.png)

---

Welcome to the MemeStash PWA Repo. This PWA is to be used with one of the 2 back-ends of the Memestash project.

## Setup
**W.I.P.**

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
**N/A**

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