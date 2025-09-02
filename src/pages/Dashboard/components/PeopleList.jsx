import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {Array.isArray(people) &&
        people.map((person, index) => (
          <PeopleListItem key={index} person={person} id={index} />
        ))}
    </ul>
  );
}

export default PeopleList;
