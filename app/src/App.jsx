import { Fragment } from "react";
import "./style.css";

export default function App() {
  return (
    <>
      <form className="add-item-form">
        <div className="form-row">
          <label htmlFor="item">Add Item</label>
          <input type="text" id="item" />
          <button id="btn">+</button>
        </div>
      </form>
    </>
  );
}
