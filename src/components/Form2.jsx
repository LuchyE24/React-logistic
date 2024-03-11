import React, {useState} from 'react';

function Form2() {
        const [formData, setFormData] = useState({
    tracking:'',
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
    ...formData,
    [name]: value
});
};
const validateForm = () => {
    const errors = {};
    if (!formData.tracking.trim()) {
      errors.tracking = 'trackingID is required';
    }
     setErrors(errors);
     return Object.keys(errors).length === 0;
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form submission
      alert('Message sent Successfully')
      
      console.log(formData);
      // Redirect to another page
      window.location.href = '/tracking';
    }
  };

  return (
    <>
    
     <div className="col-md-3 mt-5" data-aos="fade-up" >
     <form action="" onSubmit= {handleSubmit}>
  <input type="id" name='tracking' value={formData.tracking} placeholder='Enter your tracking ID Here' className={`form-control ${errors.tracking && 'is-invalid'}`}
                 onChange={handleChange} />
                 {errors.tracking && <div className="invalid-feedback">{errors.tracking}</div>}
        
            <button className="btn btn-danger mt-3">Track</button>
            </form>
    </div>
    
    </>
  )
}

export default Form2