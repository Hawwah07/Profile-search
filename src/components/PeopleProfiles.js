import React from "react";
import PeopleProfile from "./PeopleProfile";

function PeopleProfiles( {people, search}) {
  return (
    <div className="body-page">
      {people.filter(
          (person) =>
            person.firstName
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            person.lastName.toLowerCase().includes(search.toLowerCase())
        ).map((person) => {
        return (
            <div className="card-box">
          <PeopleProfile
            key={person.id}
            id={person.id}
            title={person.title}
            firstName={person.fistName}
            lastName={person.lastName}
            picture={person.picture}
          />
          </div>
        );
      })}
    </div>
  );
}

export default PeopleProfiles;
