# The Greaaat Gatsby [![](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

These are the files of the [Greaaat](http://greaaat.com/) website, powered by [Gatsby](https://www.gatsbyjs.org/) and hosted on [Netlify](https://www.netlify.com/)

## I want to update my profile

That's fairly easy if you know how to use Git ! If not, there's no shame at all, just ask someone from Greaaat, we're here to help each other after all 😎

* Start by forking the `adriantombu/the-greaaat-gatsby` repository
* Create a new git branch to work on your modifications
* You can find the data of your profile in the `src/data/freelances` directory. As you can see, these are [Markdown files](https://www.markdownguide.org/) !
* When you're happy with your changes, just commit your changes, push your branch and start a new pull request
* Once your pull request has been approved and merged in the `main` branch, your modifications will be automagically deployed!

## I don't have a profile page, how can I add one ?

For this you will need **a small text about yourself** and a **squared picture of your lovely face** (*a size of 500x500 max should be perfect*). For the purpose of this little tutorial, let's say that your name is **Georges Abitbol**.

* Start by forking the `adriantombu/the-greaaat-gatsby` repository
* Create a new git branch to work on your modifications. Let's say `profile/georges-abitbol` for example.
* Go to the `static/freelances/` directory and put your squared profile pic in it, with the name `georges-abitbol.jpg`
* Go to the `src/data/freelances/` directory, duplicate any file there, and rename it to `georges-abitbol.md`
* The following fields are mandatory, so you need to fill them with the proper informations: `title`, `position`, `city`, `website`, `picture`, `slug`, `seoTitle`, `seoDescription`
* The other fields are optional. If you don't need them to be displayed on your profile, just put `xxx` and you're good to go.
* You can write your description in [Markdown format](https://www.markdownguide.org/) just under the `---` after the fields
* When you're done with your profile page, go to the `src/data/prestations` directory, and open any of the file where you want to add your name. Georges Abitbol is a well reknown **Marketing Expert**, so he adds his name in the `freelances` field of the `experts-marketing.md` file.
* When you're happy with your changes, just commit your changes, push your branch and start a new pull request
* Once your pull request has been approved and merged in the `main` branch, your modifications will be automagically deployed!

### What's the purpose of the fields on my profile

* `title` is basically your name, and is reused in the `src/data/prestations` files to make the relation with your profile
* `position` is what your do in your professional life
* `city`, welll... where you are from
* `website` do I really need to explain ?
* `picture` is the filename used for your profile pic in the `static/freelances/` directory
* `slug` represents the url of your profile, in the format `https://greaaat.com/freelances/${slug}`
* `seoTitle` is the information displayed in the html `<title>` tag of your profile
* `seoDescription` is the information that lays in the `<meta name="description" content="" />` tag of your profile
* The other fields represents the url of your different social network profiles
