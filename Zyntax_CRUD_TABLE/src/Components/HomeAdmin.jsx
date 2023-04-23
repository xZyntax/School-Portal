import Nav from "../Components/Nav";
import Cards from "../Components/Cards";
import Greeting from "../Components/Greeting";
import Footer from "../Components/Footer";
import "../Components/HomeAdmin.css";
import { Link } from "react-router-dom";
 function HomeAdmin() {
  return (
    <div>
      <Nav />
      <section>
        <Greeting />
      </section>
      <main>
      <Link to="/student-grades">
          <Cards
            title="Student's Grades"
            desc="Manage and update student grades easily, ensuring accurate and
            complete academic records."
          />
        </Link>
        <Link to="/student-data">
          <Cards
            title="Student's Data"
            desc="Manage student progress with accurate personal information, contact
            details, and grades. Make informed decisions effortlessly."
          />
        </Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomeAdmin;