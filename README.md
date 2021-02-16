# Shaun Limbeek's Portfolio

## Summary

The request was to create a set of three interconnected webpages to serve as a portfolio for my ongoing work with coding.  The three pages are an index, a portfolio page, and a contact page.  These pages link to each other, and are created to be responsive to different browser page sizes. The index page looks like this:

![Picture of Website](/public/assets/pic-of-site.png)

## Key Pieces of Code

There are a couple of key pieces of code within these portfolio pages that allows the page to run as intended. The first of these is the collapse function in the navbar that allows for the links on the right side of the navbar to collapse and disappear when the window pane reduces size.

```
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>

</button>
```
<br>

The second key piece of code is to set the background image, as well as create the container on each page that provides the object where the content is stored.

```
<div style="background-image: url('https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/w-qjCHPZbeXCQ-unsplash.jpg');"

    <main class="container mb-5 pt-5">

        <section class="card" style="max-width: 80%;">

```
This code set a background image, then placed a container on top of the background image, with a max width of 80% of the page. This will continue to scale as the window increases or decreases in width.

<br> 

The final important piece of code in the pages is having a sticky footer, which has a thick top border. To acheive this, I used the following html code:

```
    <footer class="footer pb-2 bg-dark"><span class="border-top"></span>
        <div class="footer" id="break">
            <p class="break">.</p>
        </div>
        
        <p id="footer">&copy; Copyright</p>
    </footer>
```

and the following CSS code:

```
#break {
    background-color: #4AAAA5;
    color: #4AAAA5;
    font-size: 6px;
}

#footer {
    color:#4AAAA5;
    text-align: center;
    font-style: 24px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif  ;
}
```


<hr>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Deployed Link

* [See Live Site](https://slimbeek6.github.io/SML_Portfolio/index.html)

## Licenses

* [Bootstraps](https://getbootstrap.com/) - 
The MIT License (MIT); Copyright 2011-2020 Twitter, Inc.; Copyright 2011-2020 The Bootstrap Authors

## Authors

### **Shaun Limbeek** 

- [Link to Github](https://github.com/slimbeek6/)
- [Link to LinkedIn](https://www.linkedin.com/in/shaun-limbeek/)
- [Link to Portfolio](https://slimbeek6.github.io/SML_Portfolio/index.html)