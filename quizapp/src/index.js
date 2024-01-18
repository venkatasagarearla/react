import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>
);
// function App() {
//   return (
//     <div style={{backgroundColor:"yellow"}} >
//       <h1>header component</h1>
//     </div>
//   );
// }
function Header() {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1> Technical Quiz</h1>
    </div>
  );
}

function Content() {
  function displayResult(event) {
    let ans1 = event.target.q1.value;
    let ans2 = event.target.q2.value;
    let marks=0;
    if(ans1=="A.OOPL"){
      marks++
    }
    if(ans2=="A.structured query language"){
      marks++;
    }
    alert("your marks are "+marks)
  }
  return (
    <div style={{ backgroundColor: "burlywood" }}>
      <h1> Questions</h1>
      <form onSubmit={displayResult}>
        <Question
          ques="Q.what is java ?"
          op1="A.OOPL"
          op2="B.structured PL"
          op3="c.scripted lang"
          name="q1"
        />
        <Question
          ques="Q.what is sql ?"
          op1="A.structured query language"
          op2="B.software query language PL"
          op3="c.scripted  language"
          name="q2"
        />
        <input type="submit" value="get results"></input>
      </form>
      

    </div>
  );
}
function Question(promps) {
  return (
    <div>
      <h2>{promps.ques}</h2>

      <input type="radio" name={promps.name} value={promps.op1} />
      <label>{promps.op1}</label>
      <input type="radio" name={promps.name} value={promps.op2} />
      <label>{promps.op2}</label>
      <input type="radio" name={promps.name} value={promps.op3} />
      <label>{promps.op3}</label>
    </div>
  );
}
function Footer() {
  return (
    <div className="foot">
      <h1> Kodnest Technologies</h1>
    </div>
  );
}
