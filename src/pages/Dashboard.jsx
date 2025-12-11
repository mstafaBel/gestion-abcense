import React from 'react';
import CardStat from '../components/CardStat';

const Dashboard = () => {
  // Données fictives pour l'instant
  const totalStudents = 120;
  const totalGroups = 6;
  const todayAbsences = 14;
  const mostAbsentGroup = 'DEVINS201';

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Vue d’ensemble des absences de l’établissement.</p>

      <div className="stats-grid">
        <CardStat label="Total stagiaires" value={totalStudents} subtitle="Tous groupes confondus" />
        <CardStat label="Nombre de groupes" value={totalGroups} />
        <CardStat label="Absences aujourd'hui" value={todayAbsences} />
        <CardStat label="Groupe le plus absent" value={mostAbsentGroup} />
      </div>
    </div>
  );
};

export default Dashboard;
