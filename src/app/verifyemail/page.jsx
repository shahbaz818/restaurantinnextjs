"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

 

  const userVerifyEmail = async () => {
    try {
      await axios.post('https://restaurantinnextjs.vercel.app/api/user/verifyemail', { token });
      setVerified(true);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    // Extract token from the URL
    const urlToken = new URLSearchParams(window.location.search).get("token");
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    // Verify email if token is set
    if (token) {
      userVerifyEmail();
    }
  }, [userVerifyEmail]);

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center text-2xl text-blue-300">
      <h1>Please Verify Your Email</h1>
      <h2>
        {token ? `${token}` : "No token"}
      </h2>

      {verified && (
        <div className="text-center text-2xl text-green-300">
          <h1>Verification Successful</h1>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div className="text-center text-2xl text-red-300">
          <h1>Error: Invalid token</h1>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
