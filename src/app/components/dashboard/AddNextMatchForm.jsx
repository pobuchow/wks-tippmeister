import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { requestAddNewMatchToGame } from "../../store/mutations/matchMutations";

export const AddNextMatchForm = ({ addNewMatchToGame }) => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());

  return (
    <div>
      <div className="page-body-label">add next match</div>
      <form className="form-complex">
        <label>
          home team:
          <input
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
          />
        </label>
        <label>
          away team:
          <input
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
          />
        </label>
        <label>
          event date:
          <input
            type="date"
            value={moment(eventDate).format("YYYY-MM-DD")}
            onChange={(e) => setEventDate(new Date(e.target.value))}
          />
        </label>
        <label>
          event time:
          <input
            type="time"
            value={moment(eventTime).format("HH:mm")}
            onChange={(e) =>
              setEventTime(moment(e.target.value, "HH:mm").toDate())
            }
          />
        </label>
        <button
          className="form-complex-button"
          type="button"
          onClick={() =>
            addNewMatchToGame(homeTeam, awayTeam, eventDate, eventTime)
          }
        >
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewMatchToGame(homeTeam, awayTeam, eventDate, eventTime) {
      dispatch(
        requestAddNewMatchToGame(
          ownProps.game,
          homeTeam,
          awayTeam,
          eventDate,
          eventTime
        )
      );
    },
  };
};

export const ConnectedAddNextMatchForm = connect(
  null,
  mapDispatchToProps
)(AddNextMatchForm);
