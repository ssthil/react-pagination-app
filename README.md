
## React App with Tabs and Pagination

Built responsive react app using bootstrap and consumed data from `https://jsonplaceholder.typicode.com/posts` to display data with pagination.

### Folder Structure

This project would look like this:

```
react-pagination-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      Fragments/
        Fragments.js
        TabContent.js
      Header/
        Header.js
        style.css
      Home/
        Home.js
        style.css
      List/
        List.js
      Nav/
        LeftNav.js
        style.css
      Pagination/
        Pagination.js
        style.css
      Tab/
        Tab.js
        Tabs.js
        style.css
    mock/
      mock_data.json
    route/
      route.config.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.