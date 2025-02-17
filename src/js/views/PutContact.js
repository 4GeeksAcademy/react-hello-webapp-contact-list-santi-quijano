import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';


const PutContact = () => {

  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [full_name, setFull_name] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    handleContactInfo();
  }, [id]);

  const handleContactInfo = async () => {
    try {

      const getAContact = await actions.getContact(id);
      if (getAContact && typeof getAContact === 'object') {

        setFull_name(getAContact.full_name || "")
        setAddress(getAContact.address || "")
        setPhone(getAContact.phone || "")
        setEmail(getAContact.email || "")
      } else {
        console.error("Invalid data received.")
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateOfContact = async (e) => {
    e.preventDefault();
    try {
      await actions.putContact(id, full_name, address, email, phone);
      await actions.getContacts();
      navigate("/")
    } catch (error) {
      console.error("Error updating contact:", error)
    }
    // window.location.href = "/";
  };
  return (
    <div className="put-contact-container container mt-10">
      <h1 className="text-center mb-4">Edit Contact</h1>
      <form onSubmit={handleUpdateOfContact}>
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
          <input type="tel" className="form-control" id="inputPhone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-2">
          <p>Address</p>
          <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>
      <br />
      <Link to="/"><button type="submit" className="btn btn-primary w-100 mt-3">Get back to contacts</button></Link>
    </div>
  )
}

export default PutContact


