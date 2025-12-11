// src/store/groupsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [
    { id: 1, code: 'DEVINS201', filiere: 'Développement Digital', niveau: '1ère année' },
    { id: 2, code: 'DEVINS202', filiere: 'Développement Digital', niveau: '2ème année' },
    { id: 3, code: 'INFINS201', filiere: 'Infographie', niveau: '1ère année' },
  ],
  students: [
    { id: 1, nom: 'El Amrani', prenom: 'Sara', groupe: 'DEVINS201' },
    { id: 2, nom: 'Ouahdou', prenom: 'Bilal', groupe: 'DEVINS201' },
    { id: 3, nom: 'Bennani', prenom: 'Aya', groupe: 'DEVINS202' },
  ],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup(state, action) {
      state.groups.push(action.payload);
    },
    addStudent(state, action) {
      state.students.push(action.payload);
    },
  },
});

export const { addGroup, addStudent } = groupsSlice.actions;
export default groupsSlice.reducer;
