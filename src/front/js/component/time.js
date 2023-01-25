import React, { Fragment, useState } from "react";
import {
  DateTimePicker,
  KeyboardDateTimePicker,
  TimePicker,
} from "@material-ui/pickers";

function InlineDateTimePickerDemo() {
  const todayDate = new Date().toLocaleDateString("es-ES");

  const [startDate, setStartDate] = useState(todayDate);
  const [endDate, SetEndDate] = useState(todayDate);

  return (
    <div className="container">
      <div className="row mt-5 p-3 bg-light text-dark text-center">
        <Fragment>
          <div className="mb-3 pt-3">
            <p>Desde</p>
            <DateTimePicker
              inputVariant="outlined"
              value={startDate}
              onChange={setStartDate}
            />
          </div>
          <div>
            <p>Hasta</p>
            <DateTimePicker
              inputVariant="outlined"
              value={endDate}
              onChange={SetEndDate}
            />
          </div>
        </Fragment>
        <p>Costo de su estadia de horas</p>
        <button type="button" class="btn btn-secondary">
          Reservar
        </button>
      </div>
    </div>
  );
}

export default InlineDateTimePickerDemo;
