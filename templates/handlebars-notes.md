# Using Handlebars in this project

## Compiling Templates

In the `templates` folder, run

    handlebars -m ./ -f mc-templates.js

The `-m` flag will minify the output.

## Usage API

-  ### `profile-menu-link`
    Context:
    - `name` : The name to display in the menu link.
    - `imgurl` : URL for the profile image.
