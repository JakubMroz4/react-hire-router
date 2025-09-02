import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile({ handleHirePerson, data }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setPerson(data[id]);
  }, []);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm id={id} handler={handleHirePerson} />
    </article>
  );
}

export default PersonProfile;
