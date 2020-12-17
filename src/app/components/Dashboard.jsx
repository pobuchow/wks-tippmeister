import React from "react";
import { connect } from 'react-redux';

export const Dashboard = ({users}) => (
  <div>
    <h2>dashboard</h2>
    {users
        .sort((u1, u2) => u2.points - u1.points)
        .map(user =>(
            <div>
                {user.name}
            </div>
        ))}
  </div>
);

function mapState2Props(state){
    return {
        users: state.users
    }
}

export const ConnectedDashboard = connect(mapState2Props)(Dashboard);