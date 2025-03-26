# Contactify App

Contactify is the app for contacts table and user details in one place.

## What is used:

- React
- Vite
- Typescript
- Jest and React Testing library

## Requirements for the given result:

There were specific given requirements that I implemented into the app:

- Supports latest Chrome version ("last 1 Chrome version")
- Added flexbox for simple responsiveness but without the extra design as mentioned (if app will get bigger - it can be adjusted)
- Used MUI library to make task easier


## How I approached the task?

With some libraries like MUI I was already familiar a bit from before and that is why I chose them. In the future if app
would grow this could still be used.

#### Reusability

I created reusable components, because if the app would be
getting bigger we would need to ensure code maintainability and
try to reuse as much as we could without overcomplicating the
codebase.

#### MUI library

Used MUI library for theme and table. The theme could be updated more.

#### Non task specific - Loader

Added the loader when data is being fetched to give better user experience.

#### Figma design - user picture

Since user picture was on the top of the card and misalignment were visible I assumed the card was supposed to have the image
inside of it as top div and background with rounded corners on top right and left.

#### On hover row

When navigating on what user to click in the table I added slightly visible
background color to indicate you are on that row. It improved the UX.

## What could be improved?

#### Tests
Even though I wrote some tests, I believe they could be better with better mocking and so.

#### Font Awesome Icons

In the application I used the free version for
eye icon. For Exact match of the icon I would have needed to use a pro.

#### Fonts

I embedded into HTML index file fonts from Google fonts.
But fonts could have been also downloaded and added into the application.

#### Accessibility

By making rem and em instead of px is a better accessibility use (for texts).

Also, for tables accessibility adding specific tables roles can help when user would use
something like disabled CSS or screen readers.

Keyboard navigation - clicking on table with keyboard to open user details if user uses
keyboard to navigate within the app.

#### Table
It's not perfect.

<img width="1332" alt="cont" src="https://github.com/user-attachments/assets/0ddc1b2a-f5d1-436e-ba1a-9389d25b4e3c" />


