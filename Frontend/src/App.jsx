import { useState } from "react"
import axios from "axios"
const App = ()=>{
  const [fileData,setFileData] = useState();

  const handleFileChange=(e)=>{
    console.log(e.target.files);
    setFileData(e.target.files[0]);
    console.log(fileData);
  }

  const handleSubmit=async()=>{
    const formdata = new FormData();
    formdata.append("file",fileData)
    let api ="http://localhost:8008/upload";
    const response = await axios.post(api,formdata ,{
      header:{
        "content-type":"multipart/from-data"
      }
    });
     
    console.log(response);

    alert("File Uploaded")
  }
  return(
    <>
    <h1>Choose File or Uploading with Multer Function way</h1>
   Upload Image: <input type="file" onChange={handleFileChange} ></input>
   <br></br>
   <button onClick={handleSubmit} >Upload</button>
    </>
  )
}
export default App