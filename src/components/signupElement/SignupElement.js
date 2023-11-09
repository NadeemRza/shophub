import "./signupElement.scss";
import EyeImg from "../../assets/eye.svg";
import { useState } from "react";

const SignupElement = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e?.target?.semail?.value;
    const password = e?.target?.password?.value;
    setFormData({ email: email, password: password });
    if (localStorage.getItem("user") !== null) {
      alert("You are already logged in!");
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registered Sucessfully!");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="signupElement">
      <form onSubmit={handleSubmit} className="signupElementWrapper">
        <h2>Sign Up</h2>
        <label htmlFor="semail">Email:</label>
        <input
          type="email"
          name="semail"
          id="semail"
          placeholder="abc@example.com"
        />
        <label htmlFor="spaswword">Password:</label>
        <div className="spasswordInput">
          <input type="password" name="password" id="password" />
          <img src={EyeImg} alt="eye_image" className="eye_image" />
        </div>
        <label htmlFor="spaswword">Confirm Password:</label>
        <div className="sspasswordInput">
          <input type="password" name="sspassword" id="sspassword" />
          <img src={EyeImg} alt="eye_image" className="eye_image" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupElement;
