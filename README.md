# The Bookish Shelf 📚✨

**The Bookish Shelf** (also known as *The Philosophical Shelf*) is a minimalist, professional, and modern eCommerce platform built with the MERN stack (specifically focusing on MongoDB, Express, and Node.js for the backend). It is designed to provide a curated experience for those seeking books, spiritual tools, and philosophical merchandise.

---

## 🚀 Features

- **Professional UI/UX**: Clean, minimalist design using `DM Sans` and `DM Serif Display` fonts.
- **Product Management**: Browse curated books and spiritual tools.
- **Dynamic Shopping Cart**: 
  - Add/Remove items from the cart.
  - Floating cart component for quick access.
  - Persistent storage using `localStorage`.
- **User Authentication**: Secure Login and Registration using JWT (JSON Web Tokens) and Bcrypt for password hashing.
- **Order Management**: Create orders and view summaries.
- **Seller Registration**: A dedicated onboarding flow for new sellers.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## 🛠️ Tech Stack

### **Frontend**
- **HTML5 & CSS3**: Custom styles (no heavy CSS frameworks for maximum performance).
- **Vanilla JavaScript**: DOM manipulation and asynchronous API calls.
- **Google Fonts**: DM Sans (Body) & DM Serif Display (Headings).

### **Backend**
- **Node.js & Express.js**: Fast and minimalist web framework.
- **MongoDB & Mongoose**: NoSQL database for flexible data modeling.
- **JWT**: Secure authentication flow.
- **Bcrypt**: Industrial-grade password hashing.
- **Dotenv**: Environment variable management.

---

## 📂 Project Structure

```text
Ecommerce_Website/
├── public/                # Frontend assets (HTML, CSS, JS)
│   ├── cart.html          # Shopping cart page
│   ├── index.html         # Homepage
│   ├── login.html         # Login page
│   ├── register.html      # User registration
│   ├── seller-registration.html # Seller onboarding
│   ├── styles.css         # Global styles
│   ├── cart.css           # Cart-specific styles
│   └── script.js          # Core frontend logic
├── src/                   # Backend source code
│   ├── controllers/       # Route controllers (Auth, Products, Orders)
│   ├── models/            # Mongoose schemas (User, Product, Order)
│   ├── routes/            # API endpoints
│   └── middleware/        # Authentication & Role-based access
├── server.js              # Entry point for the Node server
└── .env                   # Environment configurations
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ecommerce_website.git
   cd ecommerce_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MongoDB_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Seed the database (Optional)**
   If there's a `seed.js` file, you can populate initial data:
   ```bash
   node seed.js
   ```

5. **Start the server**
   ```bash
   npm start
   ```
   Open your browser and navigate to `http://localhost:3000`.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request.


*“Feed Your Intellect. Awaken Your True Self.”*


-FRONT END ELEMENTS WERE CREATED WITH AI BUT THATS ALL...
