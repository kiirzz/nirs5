import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Account = () => {
    const { currentUser } = useContext(AuthContext);

  return (
    <div className="account">
        <h2 className="account-title">Account</h2>
        <div className="account-content">
            <form className="form d-flex flex-column admin-form">
                <div className="admin-form-element">
                    <h5>Name</h5>
                    <div className="d-flex align-items-center justify-content-between gap-3">
                        <input type="text" placeholder='First name' name='firstname' className='admin-form-input' value={currentUser.dataValues.firstname}/>
                        <input type="text" placeholder='Last name' name='lastname' className='admin-form-input' value={currentUser.dataValues.lastname}/>
                    </div>
                </div>
                <div className="admin-form-element">
                    <h5>Username</h5>
                    <input type="text" className="admin-form-input" name="username" value={currentUser.dataValues.username}/>
                </div>
                <div className="admin-form-element">
                    <h5>Password</h5>
                    <input type="text" className="admin-form-input" name="password" value={currentUser.dataValues.password}/>
                </div>
                <div className="admin-form-element">
                    <h5>Email</h5>
                    <input type="text" className="admin-form-input" name="email" value={currentUser.dataValues.email}/>
                </div>
                <div className="admin-form-element">
                    <h5>Phone number</h5>
                    <PhoneInput
                        className="telnumber"
                        name='tel'
                        country={'ru'}
                        value={currentUser.dataValues.tel}
                    />
                </div>
            </form>
        </div>
    </div>
  );
}

export default Account;