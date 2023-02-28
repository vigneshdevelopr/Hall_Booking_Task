const data = [
    {
        roomsavailable: "100",
        AmenitiesinRoom: "cot, ac, heater, extra-pillow",
        price: "200/hr"
    


    }
]

//==========Base======================================================

const express = require('express')
const app = express();
const PORT = 9100;
app.use(express.json())
app.listen(PORT, ()=>console.log(`hey your server has connected successfully to ${PORT}🧑‍💻`));
//================================================================================================

app.get('/', (req, res)=>{
res.send("Hey Developer")
});

//================================================================================================

//get about room information: 

app.get('/room', (req, res)=>{
    res.send(data)
})

//================================================================================================

//get booked customers room information: 

app.get('/all/customers', (req, res)=>{
    res.send(customers)
})
//================================================================================================





//================================================================================================
//Booking a room 


const customers = [] // array to store customer data

app.post('/customers', (req, res) => {
  const { name, email, date, Starttime, endtime, roomid } = req.body;
  const status = "confirmed";

  // Check if customer with the same email already exists
  const existingCustomer = customers.find(c => c.date === date);
  if (existingCustomer) {
    res.status(409).json({ message: 'Customer with this email already exists.' });
  } else {
    // Insert new customer record into customers array
    const newCustomer = { name, email , date, Starttime, endtime, roomid, status };



    customers.push(newCustomer)


    res.status(201).json({ message: 'Customer added successfully.' });

  }
});

app.get('/all/customers',(req, res) => {
    res.send(customers)
})

//================================================================


