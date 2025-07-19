import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>Fun Fact Project</h1>
        <ul className="facts">
          <li>was first released in 2013</li>
          <li>was originally created by jordan walke</li>
          <li>waswell over 300k stars on Github</li>
          <li>is maintained by meta</li>
          <li>powers thousands of enterprise apps including mobile apps</li>
        </ul>

        <h3>Conclusion</h3>
        <p>
          Overall, React's unique combination of ease of use, real-world
          relevance, and job prospects make it a popular choice among students.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
