# MyReads Application

Application for people which like to read the books, and have long list to arrange. You can add new books from any online shop:).
The books you can categories for 3 shelves.
- Currently reading, 
- Want to read 
- Read. 

The application helps you controll your books, plan future reading


# How to use

The front page list all book you read or want to read. You can arrange the books using drop down list(green booton). You have four option:
- Currently Reading
- Want to read
- Read
If you need to change book's shelf chose one of the option. The book will be moved to propriet shelf

To add new book please click, plus green button, right down corner.
You will be redirected to search tool.
To find a book start typing. The application will search book based on query.
If you find book click the green button with arrow.
From the dropdown list chose the shelf-category where to book shoudl shown.


# Instalation 

Requirements
```Node.js```
You can find how to install node.js here [Link](https://nodejs.org/en/)

To install application please go to this link [Download MyReads](https://github.com/wad2eq/Udacity-MyBookReads).  Click gren button 'Code' and chose option propriet for you.

After downloading open a terminal. 
- Go to location ```cd folder_where_code_was_downloaded/Udacity-MyBookReads ```
- npm install (node will install necessary application)
- npm start, this will run your aplication



## Additional information

Applicarion MyReads is build on top (React.js)[https://reactjs.org/]
## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── SearchBook.js # The script for searching books
    ├── Shelf.js # The component genereting one shelf
    ├── Book.js # The component genereting one book.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── img # Images for your app. Use at your discretion.
    │   ├── bookthum.jpg
    │   ├── keny.gif
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


## Design
Color and design are based on material design , basil theme.
[basil theme](https://material.io/design/material-studies/basil.html)
