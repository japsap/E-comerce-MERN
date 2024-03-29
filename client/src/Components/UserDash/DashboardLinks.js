import React from "react";

import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

const DashboardLinks = ({ user }) => {
  return (
    <>
      {user?.isAdmin ? (
        <li>
          <Link to={`/dashboard/${user?._id}/post-an-add`}>
            Post An Add
          </Link>
        </li>
      ) : (
        ""
      )}

      {Data.boxAccountLinks.map((link) => (
        <li key={link.id}>
          <Link to={`/dashboard/${user?._id}${link.path}`}>{link.name}</Link>
        </li>
      ))}
    </>
  );
};

export default DashboardLinks;
