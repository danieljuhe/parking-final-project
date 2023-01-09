import React, { useState } from "react";
import { DatePicker, DateTimePicker, TimePicker } from "@material-ui/pickers";

const Date_Time = () => {
  const [selectDate, setSelectDate] = useState();
  return (
    <div className="contenedor">
      <div className="grupo">
        <label>Fecha</label>
        <DatePicker value={selectDate} onChange={setSelectDate} />
      </div>

      <div className="grupo">
        <label>Hora</label>
        <TimePicker value={selectDate} onChange={setSelectDate} />
      </div>

      <div className="grupo">
        <label>Fecha y Hora</label>
        <DateTimePicker value={selectDate} onChange={setSelectDate} />
      </div>
    </div>
  );
};

export default Date_Time;
