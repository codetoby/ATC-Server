# ATC Server

The ATC (Add to Cart) server is an Express.js application designed to automate the process of adding products (shoes) to the cart.

## API Reference

### Adding items to Shopping Cart

```http
  GET /atc?site=${site}&pid=${pid}&size=${size}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `site`    | `string` | **Required**. The site where you want to cart the shoe. |
| `pid`     | `string` | **Required**. ID of the shoe. |
| `size`    | `string` | **Required**. Size of the shoe. |

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd atcserver
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Authors

- [@codetoby](https://www.github.com/codetoby)

