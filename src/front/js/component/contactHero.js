import React from "react";

export default function ContactHero() {
  return (
    <div className="hero my-5 p-5">
      <h2>Give us your Feedback!</h2>
      <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label w-75">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}
