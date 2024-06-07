# vue-ecommerce

Online Store.

## Entities

### Product
-   id
-   name
-   description
-   price
-   image

### Category
-   name
-   description

### Cart
-   products: '[{producutId : 1, quantity: 3}, {producutId: 7, quantity: 5}]'
## Components

### ProductCard

## pages
- / -> All products
- /category/5 -> Products by category
- /cart ->  View shopping cart


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
