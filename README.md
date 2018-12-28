# VeganIpsum API ❤️ 🐄 🐓 🐑 🐟

[veganipsum.co](https://www.veganipsum.co) (hosted on Heroku)

Powered by Node, Express, Pug and Bulma

VeganIpsum API is a LoremIpsum text generator that uses vegan-friendly terms. It comprises:
 - A back-end consisting of an API serving different endpoints to generate random and selective output.
 - A front-end site hosting information and a random text generator.

## Pending

  I'm considering moving the database of words to MongoDB to allow CRUD operations.

## Instructions

You can use this app in different ways:

### The Vegan Ipsum generator.

- Go to https://www.veganipsum.co or click on the Generator 🤖 link from the Navigation links.

- Pick how many words you want your random text to contain (10, 15 or 20), click on "Generate random text" and voila!

- Additionaly you can click on the "Copy" button to copy the generated text right into your clipboard.

### The Vegan Ipsum API.

You can build your request URL the following way

Base URL is `https://www.veganipsum.co/api`

### Endpoints:

`/eggs`, `/meat`,`/cheese`,`/grains`,`/brands` will each return a JSON containing a list of terms.

You can browse the endpoints directly in the browser or make a http call to retrieve the words.

For example, browsing to `https://www.veganipsum.co/api/cheese` will give you the following output:

```javascript
{
    0: "daiya",
    1: "follow your heart ",
    2: "teese",
    3: "sheese ",
    4: "vegan rella",
    5: "cheezly ",
    6: "parma",
    7: "soymage vegan parmesan "
}
```

You can get a full list of the terms at the `/full-list` endpoint and to `/full` to vizualise the full JSON object containing all the categories.

By default your browser will probably display raw JSON data, making it difficult to scan and use.

You can use a browser extension to prettify the JSON right into the browser. Some useful extensions include the following:

- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) for Google Chrome.
- [JSONView](https://addons.mozilla.org/en-US/firefox/addon/jsonview/) for Mozilla Firefox.
