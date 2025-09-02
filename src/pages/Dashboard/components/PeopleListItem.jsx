import { useNavigate } from "react-router-dom";

function PeopleListItem({ person, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view/${id}`);
  };

  return (
    <li onClick={handleClick} className="peopleListItem">
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && (
        <p>
          Wage: £{person.wage} <button>Edit</button>
        </p>
      )}
    </li>
  );
}

export default PeopleListItem;
