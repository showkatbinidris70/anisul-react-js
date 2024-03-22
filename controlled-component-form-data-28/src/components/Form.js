import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log({ name, email, password });
  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
    console.log(name, email, password);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="col-sm-6  col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="col-sm-6  col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="col-sm-6  col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
