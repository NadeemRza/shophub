import "./accountElement.scss";
import EyeImg from "../../assets/eye.svg";
import InfoImg from "../../assets/info.svg";
import BinImg from "../../assets/bin.svg";

const AccountElement = () => {
  return (
    <div className="accountElement">
      <div className="accountElementContainer">
        <div className="left">
          <h2>Update Password</h2>
          <label htmlFor="semail">Email:</label>
          <input
            type="email"
            name="semail"
            id="semail"
            placeholder="abc@example.com"
            disabled
          />
          <label htmlFor="cpaswword">Current Password:</label>
          <div className="cpasswordInput">
            <input type="password" name="cpassword" id="cpassword" />
            <img src={EyeImg} alt="eye_image" className="eye_image" />
          </div>
          <label htmlFor="npaswword">New Password:</label>
          <div className="npasswordInput">
            <input type="password" name="npassword" id="npassword" />
            <img src={EyeImg} alt="eye_image" className="eye_image" />
          </div>
          <label htmlFor="cnpaswword">Confirm Password:</label>
          <div className="cnpasswordInput">
            <input type="password" name="cnpassword" id="cnpassword" />
            <img src={EyeImg} alt="eye_image" className="eye_image" />
          </div>
          <button>Update Password</button>
        </div>
        <div className="right">
          <table>
            <caption>Orders Details</caption>
            <tr>
              <th>ORDER ID</th>
              <th>TIME STAMP</th>
              <th>TOTAL</th>
              <th>ACTIONS</th>
            </tr>
            <tr>
              <td>65526dsdfs</td>
              <td>22102021</td>
              <td>Rs. 336</td>
              <td className="icons">
                <span>
                  <img src={InfoImg} alt="" className="info_image" />
                </span>
                <span>
                  <img src={BinImg} alt="" className="bin_image" />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountElement;
