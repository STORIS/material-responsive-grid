# Material Responsive Grid #

A grid system that adheres to the [responsive UI](https://material.io/guidelines/layout/responsive-ui.html) standards outlined for Google's [Material Design](https://material.io).  The source consists of [PostCSS](http://postcss.org/) stylesheets that are imported in a specific order and built using [postcss-cli](https://github.com/postcss/postcss-cli).

## Installation ##

```
npm i material-responsive-grid --save
```

## Grid System ##

There are three basic elements of this grid system: grids, rows, and columns.  

 - Rows must be contained by a grid
 - Columns must be contained by a row


### Breakpoints ###

This grid system supports six screen sizes:

- Extra-small (4 columns)
- Extra-small (8 columns)
- Small (8 columns)
- Small
- Medium
- Large
- Extra-Large

This follows Google's recommendation for [responsive UI breakpoints](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints):

- With the exception of the first three, screen sizes have 12 columns.
- The gutter is either 16 px or 24 px.  A 24 px gutter is applied when both screen dimensions are greater than or equal to 600 px.
- Grids will fill the viewport until 1600 px.  At this point, the grid can either: continue to fill the viewport or remain 1600 px wide (left aligned or centered).

### Classes ###

Most classes apply to a particular screen size.  This relationship is designated by the inclusion of the screen size's abbreviation in the class name:

- Extra-small (4 columns): *xs4*
- Extra-small (8 columns): *xs8*
- Small (8 columns): *sm8*
- Small: *sm12* or *sm*
- Medium: *md12* or *md*
- Large: *lg12* or *lg*
- Extra-large: *xl12* or *xl*

For screen sizes with twelve columns, a duplicate set of classes has been provided that does not include the number of columns in the screen size's abbreviation.

#### Grids ####

Grids have the following classes:

 - .grid - The main element that contains rows.  It has a margin applied that will absorb the row's negative left and right margins.
 - .grid-fixed-left - Starting at 1600 px, the grid will be fixed width and left aligned in the viewport.
 - .grid-fixed-center - Starting at 1600 px, the grid will be fixed width and centered horizontally in the viewport.

The default behavior for a grid will be to fill the viewport, which is the behavior that will occur when the fixed-width classes are omitted.

#### Rows ####

Rows must be contained by a Grid and have the following classes:

 - .row - The element that contains columns.  It uses a negative margin that negates the outer gutter of the first and last columns.
 - .reverse - Reverse direction of this row.
 - .start-{size} - Justify content to the start for the specified sizes (based on direction).
 - .center-{size} - Center content within this row for the specified sizes.
 - .end-{size} - Justify content to the end for the specified sizes (based on direction).
 - .top-{size} - Vertically align content to top for the specified sizes.
 - .middle-{size} - Vertically align content to middle for the specified sizes.
 - .bottom-{size} - Vertically align content to bottom for the specified sizes.
 - .around-{size} - Evenly distribute unused space around columns for the specified sizes.
 - .between-{size} - Evenly distribute unused space between columns for the specified sizes.

#### Columns ####

Columns must be contained by a Row and have the following classes:

 - .col-{size}-{integer, 1-max column count} - Number of columns to consume for a particular screen size
 - .col-{size}-offset-{integer, 0-max column count-1} - Number of columns to offset this column for a particular screen size
 - .first-{size} - Present this column first for a particular screen size (based on row direction)
 - .last-{size} - Present this column last for a particular screen size (based on row direction)
 - .hidden-{size}-only - This column will be hidden for a particular screen size
 - .hidden-{size}-down - This column will be hidden for screens as wide as or narrower than a particular screen size
 - .hidden-{size}-up - This column will be hidden for screens as wide as or wider than a particular screen size

## Inspiration ##

- [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)
- [bootstrap](https://github.com/twbs/bootstrap)
