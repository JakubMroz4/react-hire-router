import PeopleListItem from "./PeopleListItem";

function PeopleList({ people, data }) {
  return (
    <ul className="peopleList">
      {Array.isArray(people) &&
        people.map((person, index) => (
          <PeopleListItem
            key={index}
            person={person}
            id={data.indexOf(person)}
          />
        ))}
    </ul>
  );
}

export default PeopleList;
