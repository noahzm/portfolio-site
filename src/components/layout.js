import React from "react";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <div>
      <div className="navbar p-3 lg:p-6">
        <div className="flex-1">
          <Link to="/" className="font-medium text-xl lg:text-3xl">
            Noah Michaels
          </Link>
        </div>
        <div className="flex-none">
          <div className="tabs">
            <Link
              to="/portfolio"
              className="tab lg:text-lg"
              activeClassName="underline decoration-2 underline-offset-8"
            >
              Portfolio
            </Link>
            <a href="mailto:hi@noahmichaels.xyz" className="tab lg:text-lg">
              Contact
            </a>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
