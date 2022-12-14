import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import notFounImg from '../assets/images/others/not-found.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-full-height d-flex flex-row align-items-center">
      <div className="container">
        <div
          className="d-flex justify-content-center mx-auto"
          style={{ width: 'min(340px, 90vw)' }}
        >
          <img className="img-fluid" src={notFounImg} alt="" />
        </div>
        <div className="text-center mt-5">
          <h1 className=" fw-bolder mb-3">Oops... PAGE NOT FOUND!</h1>
          <p className="mb-4 font-size-lg">
            The page you're looking for doesn't exist. We suggest you go back to
            the previous or home page.
          </p>
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            <button onClick={() => navigate(-1)} className="btn btn-primary">
              Previous Page
            </button>
            <Link to="/" className="btn btn-info">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
