import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string; // Represents the name of the school
  name: string; // Represents the mascot name
  city: string; // Represents the city
  state: string; // Represents the state
}

function Welcome() {
  return <h1>Welcome to the College Basketball Teams Showcase!</h1>;
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teams.teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
