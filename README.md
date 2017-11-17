# spoilerJs
It is a script for create inline spoiler spot in html.

Written with JS+JQuery

![It's how it works](spoilerJs.gif)

and very easy to use;


First import jQuery, spoiler.js, spoiler.css...
```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" charset="utf-8"></script>
    <script src="../src/spoiler.js"></script>
    <link rel="stylesheet" href="../src/spoiler.css">
```
Get your spoilered word/sentence between ```[spoiler]``` tags.
```html
    <div id="myText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus hendrerit leo,
        eget varius dolor tincidunt ut. Sed id laoreet odio,
        [spoiler] nec gravida quam [spoiler] Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Ut et ultrices risus. 
        Quisque mollis metus magna, ac porttitor metus imperdiet vitae.
    </div>
```
then, ```spoiler()``` it...

```javascript
  spoiler($("#myText"),{title:"Spoiler! Don't Click."});
```

