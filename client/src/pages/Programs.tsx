import { useEffect, useState } from "react";
import "./Programs.css";

interface Program {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching", error));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img alt="affiche de la série" src={program.poster} />
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
