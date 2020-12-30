import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  const gameId = 1;
  return (
    <div>
      <Link to={`game/${gameId}/dashboard`}>
        <h1>Wks-Tippmeister</h1>
      </Link>
    </div>
  );
};

export const ConnectedNavigation = connect((state) => state)(Navigation);
