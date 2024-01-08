import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import "../../styles/PostContact.css";

const PostContact = () => {
  const { store, actions } = useContext(Context);

  const [full_name, setFull_name] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNewContact = async (e) => {
    e.preventDefault();
    actions.getContacts();
    actions.postContact(full_name, address, phone, email);
  }

  return (
    <div className="container mt-10">
      <h1 className="text-center">Add contact</h1>
      <form onSubmit={handleNewContact}>
        <div className="mb-2">
          <p>Full name</p>
          <input type="text" className="form-control" placeholder="Full Name" value={full_name} onChange={(e) => setFull_name(e.target.value)} />
        </div>
        <div className="mb-2">
          <p>Email</p>
          <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
          <p>Phone</p>
          <input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-2">
          <p>Address</p>
          <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>
      <br />
      <Link to="/"><button type="submit" className="btn btn-primary w-100">Get back to contacts</button></Link>
    </div>
  )
}

export default PostContact

