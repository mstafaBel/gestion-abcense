import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markAttendance } from '../store/attendanceSlice';

const Attendance = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.groups.students);
  const [selectedGroup, setSelectedGroup] = useState('DEVINS201');
  const [module, setModule] = useState('Développement Web');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [seance, setSeance] = useState('08:30-10:30');
  const [presenceMap, setPresenceMap] = useState({}); // {studentId: 'present' | 'absent'}

  const filteredStudents = students.filter((s) => s.groupe === selectedGroup);

  const handleChangeStatus = (studentId, status) => {
    setPresenceMap((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSave = () => {
    filteredStudents.forEach((student) => {
      const status = presenceMap[student.id] || 'present'; // par défaut présent
      dispatch(
        markAttendance({
          studentId: student.id,
          groupCode: selectedGroup,
          module,
          date,
          seance,
          status,
        })
      );
    });
    alert('Absences enregistrées (fake pour l’instant 😄)');
  };

  return (
    <div>
      <h2>Saisie des absences</h2>

      <div className="filters-row">
        <div>
          <label>Groupe :</label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option value="DEVINS201">DEVINS201</option>
            <option value="DEVINS202">DEVINS202</option>
            <option value="INFINS201">INFINS201</option>
          </select>
        </div>

        <div>
          <label>Module :</label>
          <input
            type="text"
            value={module}
            onChange={(e) => setModule(e.target.value)}
          />
        </div>

        <div>
          <label>Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Séance :</label>
          <input
            type="text"
            value={seance}
            onChange={(e) => setSeance(e.target.value)}
          />
        </div>
      </div>

      <table className="table-basic">
        <thead>
          <tr>
            <th>Stagiaire</th>
            <th>Présent</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s.id}>
              <td>{s.prenom} {s.nom}</td>
              <td>
                <input
                  type="radio"
                  name={`status-${s.id}`}
                  checked={presenceMap[s.id] !== 'absent'}
                  onChange={() => handleChangeStatus(s.id, 'present')}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`status-${s.id}`}
                  checked={presenceMap[s.id] === 'absent'}
                  onChange={() => handleChangeStatus(s.id, 'absent')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-primary" onClick={handleSave}>
        Enregistrer la séance
      </button>
    </div>
  );
};

export default Attendance;
