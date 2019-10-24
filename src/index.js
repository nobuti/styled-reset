import { css } from 'styled-components'

export const reset = css`
/* Box sizing rules */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after { 
  box-sizing: inherit;
}

/* Remove default padding and list-styles */
ul,
ol {
  padding: 0;
  list-style: none;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.4;
}

/* Make images easier to work with */
img,
video {
  height: auto;
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Reset iframe border */
iframe {
  border: 0;
}

/* Table modern styles */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

td:not([align]),
th:not([align]) {
  text-align: left;
}
`

export default reset
