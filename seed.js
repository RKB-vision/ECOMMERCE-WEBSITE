//Warning only for development stage

const mongoose=require("mongoose")
const Product=require("./src/models/product")
const User=require("./src/models/User")
const Order=require("./src/models/Order")

async function seed(){
    await mongoose.connect(process.env.MongoDB_URL)

    await Product.deleteMany() // wipes out old data 
    await User.deleteMany() // wipes out old data 
    await Order.deleteMany() // wipes out old data 

    await User.insertOne({
        name:"Admin",
        email:"ecomadmin@gmail.com",
        password:"admin12345",
        role:"admin"
    })

    await Product.insertMany( [  {
        name: "Meditations by Marcus Aurelius",
        price: 14.99,
        description: "A classic Stoic text on self-discipline and inner peace.",
        image: "https://m.media-amazon.com/images/I/81DFDGzHZqL._AC_UF1000,1000_QL80_.jpg",
        category: "book",
        stock: 50
    },
    {
        name: "Lotus Incense Burner",
        price: 24.00,
        description: "Handcrafted lotus-shaped ceramic incense burner.",
        image: "https://www.yamunasincense.com/wp-content/uploads/2022/06/Incense-holder-2-scaled.jpg",
        category: "merch",
        stock: 20
    },
    {
        name: "The Power of Now",
        price: 18.50,
        description: "Eckhart Tolle's guide to spiritual enlightenment.",
        image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6777a02acc4544001d9bed6e.webp",
        category: "book",
        stock: 35
    }])//insert many takes list of objects;

    console.log("seeded")
    mongoose.disconnect()
}

seed().catch(console.error)