import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchShifts } from "../actions/shiftActions";

function ShiftList({ shiftData, fetchShifts }) {
  useEffect(() => {
    fetchShifts();
  }, []);
  return shiftData.loading ? (
    <h2>Loading</h2>
  ) : shiftData.error ? (
    <h2>{shiftData.error}</h2>
  ) : (
    <div>
      <h2>Shifts List</h2>
      <div>
        {shiftData &&
          shiftData.shifts &&
          shiftData.shifts.map((shift) => <p>{shift.location}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShifts: () => dispatch(fetchShifts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShiftList);
