import { useState } from "react";
import "./promotion.css";

function App() {
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [company, setCompany] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/promotion/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          details: details,
          company: company,
          imageUrl: imageUrl,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("notice added successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center mx-auto ">
      <form className="form col-6 mt-5  " onSubmit={handleSubmit}>
        <div className="title">Promotion</div>
        <div className="subtitle">fill the form to add promotion</div>
        <div className="input-container ic1">
          <select
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setType(e.target.value)}
          >
            <option value="paid">very important</option>
            <option value="un paid">important</option>
          </select>
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            importance
          </label>
        </div>
        <div className="input-container ic2">
          <textarea
            class="form-control"
            id="lastname"
            className="input"
            type="email"
            placeholder=" "
            onChange={(e) => setDetails(e.target.value)}
            rows="3"
          ></textarea>
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            details
          </label>
        </div>
        <div className="input-container ic2">
          <textarea
            class="form-control"
            id="lastname"
            className="input"
            type="email"
            placeholder=" "
            onChange={(e) => setImageUrl(e.target.value)}
            rows="3"
          ></textarea>
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            imageUrl
          </label>
        </div>
        <div className="input-container ic2">
          <textarea
            class="form-control"
            id="lastname"
            className="input"
            type="email"
            placeholder=" "
            onChange={(e) => setCompany(e.target.value)}
            rows="3"
          ></textarea>
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            company
          </label>
        </div>

        <button type="text" className="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
