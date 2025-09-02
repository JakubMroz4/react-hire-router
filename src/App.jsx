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

  const handleHirePerson = (person, wage) => {
    setPeople((peopleArray) => {
      const peopleArrayCopy = [...peopleArray];
      const index = peopleArrayCopy.findIndex((p) => p === person);

      if (index === -1) {
        console.log("FAILED HIRE");
        changeWage(person, wage);
        return peopleArrayCopy;
      }

      const [hired] = peopleArrayCopy.splice(index, 1);

      hired.wage = wage;

      setHiredPeople((hiredPeopleArray) => [...hiredPeopleArray, hired]);
      return peopleArrayCopy;
    });
    navigate(`/`);
  };

  const changeWage = (person, wage) => {
    const index = hiredPeople.findIndex((p) => p === person);

    if (index === -1) {
      console.log("FAILED CHANGE WAGE");
      return;
    }

    const hired = hiredPeople[index];
    hired.wage = wage;

    setHiredPeople((hiredPeopleArray) => {
      const updatedArray = [...hiredPeopleArray];
      updatedArray[index] = hired;
      return updatedArray;
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
          element={
            <Dashboard people={people} hiredPeople={hiredPeople} data={data} />
          }
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
