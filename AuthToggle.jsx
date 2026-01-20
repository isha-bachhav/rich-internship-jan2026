import { useState } from "react";
import "./AuthToggle.css";

export default function AuthToggle() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isSignUp ? "right-panel-active" : ""}`}>
        {/* SIGN IN */}
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="heading">Sign In</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>

        {/* SIGN UP */}
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="heading">Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* OVERLAY */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Friend!</h1>
              <p>Already have an account?</p>
              <button
                className="ghost"
                type="button"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>New here?</p>
              <button
                className="ghost"
                type="button"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
