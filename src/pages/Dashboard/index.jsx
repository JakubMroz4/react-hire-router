import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;
  const { people } = props;
  const { data } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} data={data} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} data={data} />
      </section>
    </main>
  );
}

export default Dashboard;
