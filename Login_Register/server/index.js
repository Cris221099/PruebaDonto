const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const PacienteModel = require('./models/Pacientes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



const app = express()


app.use(express.json())
app.use(cors({

origin: ["http://127.0.0.1:5173"],    //allow the frontend
methods: ["GET", "POST"],
credentials: true

}))
app.use(cookieParser())

mongoose.connect("mongodb+srv://Jose:Q9yA6tUCS9UZ9KD2@clinica.vpnl0h6.mongodb.net/clinicaDental");

const verifyUser = (req,res,next) => {


    const token = req.cookies.token;
    if (!token){

        return res.json("The token was not available ")
    }else{
        jwt.verify(token, "jwt-secret-key",(err,decoded) => {

          if (err) return res.json("Token is wrong")
          next();



        })
    }
    
    } 
    
    
    app.get('/home', verifyUser,(req,res) => {
    
    return res.json("success")
    
    })

app.post("/login", (req, res) => {

    const { email, password } = req.body;
    EmployeeModel.findOne({email: email })
        .then(user => {

            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {

                    if (response) {
                        const token = jwt.sign({email: user.email,role: user.role}, "jwt-secret-key",{expiresIn:"1d"})
                         //generate the token asign the email to user.emai, and secret key it is secret, expire 1 day
                         res.cookie("token", token, { sameSite: "None", secure: true });
                         //store the token in the cookie 
                        
                       return  res.json({Status:"Success", role: user.role})
                       
                    }else{

                        return res.json("the password is incorrect")
                    }
                })
         } else {
            return res.json("no record existed")
            }




        })








});





app.post('/register', (req, res) => {

    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ name, email, password: hash })
                .then(employees => res.json(employees))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))

})




// Fetch all Pacientes
app.get("/paciente", async (req, res) => {
    try {
      const pacientes = await PacienteModel.find();
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  























app.listen(3001, () => {

    console.log("server is running")
})




/*
app.post('/forgot-password', (req,res)=> {


const{email} = req.body; //request the email 
EmployeeModel.findOne({email})  //use the model to find the user of the email 
.then(user =>{
 
if(!user){

 return res.semd({Status: "User m"})

}



})

    



})

*/