import React,{useState} from "react";


import "./contact.css";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div>
      <h1 className="text-lg lg:text-3xl  font-bold text-warning text-center py-10">
        Contact Me
      </h1>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
        <form  style={{width:'80rem'}}  onSubmit={handleSubmit}>
       
    <label htmlFor="username">Your email:</label>
      <input
        type="text"
        id="username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Your message:</label>
      <input
        type="text"
        id="password"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <br />
      <button       style={{ marginTop: "1rem", backgroundColor:"#1a4870" ,color: "white" }}
  type="submit">Submit</button>
    </form>

          <div>
            <h1 className="text-5xl font-bold">
              Don't hesitate - contact me now and let's get started!
            </h1>
            <p className="py-6">
              If you would like to contact me via email, you can send me message at mrugankkiran@gmail.com. I would
              be happy to hear from you and will do my best to respond as soon as possible. Alternatively, you can also
              reach out to me on my social media accounts or through any other means of communication that you have access to.
               I look forward to hearing from you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
