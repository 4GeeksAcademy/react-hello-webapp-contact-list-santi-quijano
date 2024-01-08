import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const ContactCard = ({ contact }) => {

  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className='contact-card-container contact-card mb-4'>
        <div className="contact-profile d-flex">
          <img className="contact-picture" src="https://placehold.co/500x500" alt="Profile picture" />
          <div className="contact-info mt-3 ml-3">
            <h3 className="contact-name">{contact.full_name}</h3>
            <p className="street-adress contact-detail text-muted"><i className="fa-solid fa-location-dot"></i>&nbsp;{contact.address}</p>
            <p className="contact-number contact-detail text-muted"><i className="fa-solid fa-phone"></i>&nbsp;{contact.phone}</p>
            <p className="email-direction contact-detail text-muted"><i className="fa-solid fa-envelope"></i>&nbsp;{contact.email}</p>
            <div className='d-flex justify-content'>
              <Link to={`/put-contact/${contact.id}`}>
                <i className="btn btn-sm btn-outline-primary fa-solid fa-pencil fa-fw"></i>
              </Link>
              &nbsp;
              <i className="fa-solid fa-trash fa-fw btn btn-sm btn-outline-danger" onClick={() => {
                if (window.confirm("Are you sure you wanna delete this contact?")) {
                  actions.deleteContact(contact.id);
                  window.location.reload()
                }
              }}></i>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
