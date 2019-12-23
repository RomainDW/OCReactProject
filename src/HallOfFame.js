import React from "react";
import PropTypes from "prop-types";

import "./HallOfFame.css";

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
      {entries.map(({ id, date, guesses, player }) => (
        <tr key={id}>
          <td className="date">{date}</td>
          <td className="guesses">{guesses}</td>
          <td className="player">{player}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

HallOfFame.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      guesses: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HallOfFame;

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: "23/12/2019", player: "Lili" },
  { id: 2, guesses: 23, date: "11/12/2019", player: "Lulu" },
  { id: 1, guesses: 31, date: "06/12/2019", player: "Lolo" },
  { id: 0, guesses: 48, date: "14/12/2019", player: "Lala" }
];
