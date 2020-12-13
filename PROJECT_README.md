# DCS-ControlReader
 This is going to be an alpp that will take in the html created by tDCS World Control Export as HTML. This will make it easy to uniify a control schemee and profiles for each aircraft/

## Packages past base setup:
- `yarn add @material-ui/core`
    - `yarn add @types/material-ui`


## Convert HTML to JSON for now:
- Use this [site](https://www.convertjson.com/html-table-to-json.htm)
- Add the following html to the the body just below the `<table...>` decleration 
  - ```html
    <tr>
        <th>
            Input
        </th>
        <th>
            Command Name
        </th>
        <th>
            Location
        </th>
    </tr>

- I will add this soon