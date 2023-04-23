import React from 'react'

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle"> Save time,save money!</h1>
      <span className="mailDesc">Sign up for email</span>
      <div className="mailInputContainer">
        <input type="text " placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList