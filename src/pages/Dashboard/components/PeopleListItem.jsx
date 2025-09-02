import { useNavigate } from "react-router-dom";

function PeopleListItem({ person, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view/${id}`);
  };

  return (
    <li onClick={handleClick}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;
