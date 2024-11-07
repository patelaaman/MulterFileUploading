const express = require("express")


const app = express();

const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const port = process.env.PORT || 3000

app.use(cors());


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Photo/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage});
app.post("/upload",upload.single('file'),(req,res)=>{
    res.send("Your File Succesfully  Uplaoded")
})




app.listen(port,()=>{
      console.log(`Server Run ON POrt ${port}`)
})