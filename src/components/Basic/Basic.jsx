
import React, { useEffect, useState } from 'react'
import styles from "./basic.module.css";

const Basic = (Props) => {
  const { data, resumeData, setResumeData } = Props;
  const [allData, setAllData] = useState(data);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const getAllBasicData = (e) => {
    e.preventDefault();
    setResumeData({ ...resumeData, Basic: { ...allData, image } });
  };

  return (
    <div className={styles.basic_main_container}>
      <div>Basic Info</div>
      <form onSubmit={getAllBasicData}>
        <div>
          <label htmlFor={"name"}>Name</label>
          <input
            id='name'
            type='text'
            placeholder='Enter your name here'
            value={allData.name}
            onChange={(e) => { setAllData({ ...allData, name: e.target.value }) }}
            required
          />
        </div>
        {/* Add file input for image */}
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {/* Display preview of uploaded image */}
        {image && <img src={image} alt="Uploaded" />}
       <div>
        <label for={"jobtitle"} >Job Title</label>
        <input id='jobtitle' type='text' placeholder='Enter job title here' value={allData.jobtitle} onChange={(e)=>{setAllData({...allData,jobtitle:e.target.value})}} required/>
       </div>
       <div>
        <label for={"mobile"} >Mobile</label>
        <input id='mobile' type='number' placeholder='Enter your Mobile number here' value={allData.mobile} onChange={(e)=>{setAllData({...allData,mobile:e.target.value})}} required/>
       </div>
       <div>
        <label for={"email"} >Email</label>
        <input id='email' type='email' placeholder='Enter your email here' value={allData.email} onChange={(e)=>{setAllData({...allData,email:e.target.value})}} required/>
       </div>
       <div>
        <label for={"address"} >Address</label>
        <input id='address' type='text' placeholder='Enter your address here' value={allData.address} onChange={(e)=>{setAllData({...allData,address:e.target.value})}} required/>
       </div>
       <div>
        <label for={"profile"} >Profile</label>
        <textarea rows={10} id='profile' type='text' placeholder='Write about yourself' value={allData.profile} onChange={(e)=>{setAllData({...allData,profile:e.target.value})}} required />
       </div>
       <input id={styles.submitButton} type='submit' value={"Save"} />
     </form>
    </div>
  )
}

export default Basic;
