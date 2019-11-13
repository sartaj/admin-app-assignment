
# Admin App Assignment

## Assignment Highlights

- Navigation is auto generating based on graphql introspection of queries, and hiding certain names based on schema naming conventions and if the queries can run without required args.
    - This means new queries that return lists will automatically be added here.
- Give developer or admin user quick ability to remove more nav items via `./src/config.json`
- Auto run query for results based on `./src/config.json`
- Allow custom components for query results via `config.json`, being demonstrated with the `Address` navigation.
- Custom `useQuery` Hook created to handle dynamic query generation.
- Flat folder structure with long names, following the guidance of React core dev [Dan Ambramov](https://twitter.com/dan_abramov/status/1145354949871767552)

## If I Had More Time

Currently, the details view doesn't not query for the details. If I had more time, I would do the following

- Use the introspection query to build the queries details based on the list results `__typename`. I already have `__typename` being saved.
- Use a `Tree` component that defaults to `expanded` to display the data.
- Allow custom details components based on the `./config.json`

## Available Scripts

In the project directory, you can run:

### `yarn`

Install dependencies

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
