import "./loginElement.scss";
import EyeImg from "../../assets/eye.svg";

const LoginElement = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    let localUser = JSON.parse(localStorage.getItem("user"));
    if(localUser && e.target.email.value === localUser.email && e.target.password.value === localUser.password){
      alert("Login Sucessful!");
    } else {
      alert("Either credentials are invalid or you are not registered!")
    }
  }

  return <div className="loginElement">
    <form onSubmit={handleSubmit} className="loginElementWrapper">
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="abc@example.com" />
      <label htmlFor="paswword">Password:</label>
      <div className="passwordInput">
      <input type="password" name="password" id="password" />
      <img src={EyeImg} alt="eye_image" className="eye_image" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>;
};

export default LoginElement;
