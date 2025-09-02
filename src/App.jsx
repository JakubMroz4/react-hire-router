import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import { useNavigate } from "react-router-dom";

export default function App() {
  const apiUrl = "https://randomuser.me/api/?results=50";
  const [data, setData] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result.results);
        setPeople(result.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(people);
  }, [people]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view/${id}`);
  };

  const handleHirePerson = (id) => {
    setPeople((peopleArray) => {
      const peopleArrayCopy = [...peopleArray];
      const [hired] = peopleArrayCopy.splice(id, 1);

      setHiredPeople((hiredPeopleArray) => [...hiredPeopleArray, hired]);
      navigate(`/`);
      return peopleArrayCopy;
    });
  };

  if (loading) {
    return (
      <>
        <header>
          <h1>Hire Your Team</h1>
          <nav>
            <ul>
              <li>Dashboard</li>
            </ul>
          </nav>
        </header>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile handleHirePerson={handleHirePerson} data={data} />
          }
        />
      </Routes>
    </>
  );
}
