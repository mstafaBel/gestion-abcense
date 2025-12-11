// src/store/attendanceSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  // chaque enregistrement = 1 absence
  records: [
    // Exemple :
    // {
    //   id: '1',
    //   studentId: 1,
    //   groupCode: 'DEVINS201',
    //   module: 'Développement Web',
    //   date: '2025-12-11',
    //   seance: '08:30-10:30',
    //   status: 'absent', // present | absent
    //   justified: false
    // }
  ],
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    markAttendance(state, action) {
      // payload : { studentId, groupCode, module, date, seance, status }
      const { studentId, groupCode, module, date, seance, status } = action.payload;
      state.records.push({
        id: nanoid(),
        studentId,
        groupCode,
        module,
        date,
        seance,
        status,
        justified: false,
      });
    },
    justifyAbsence(state, action) {
      const { id } = action.payload;
      const record = state.records.find((r) => r.id === id);
      if (record) {
        record.justified = true;
      }
    },
  },
});

export const { markAttendance, justifyAbsence } = attendanceSlice.actions;
export default attendanceSlice.reducer;
