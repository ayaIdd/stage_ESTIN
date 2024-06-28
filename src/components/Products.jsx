
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [clubs, setClubs] = useState([]);

//   useEffect(() => {
//     fetch("/assets/clubs.json") // Adjust path as needed
//       .then((response) => response.json())
//       .then((data) => setClubs(data.clubs));
//   }, []);

//   const ClubCard = ({ club }) => (
//     <div id={`club-${club.id}`} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//       <div className="card text-center h-100">
//         <img
//           className="card-img-top p-3"
//           src={club.logo} // Logo path from JSON
//           alt={`${club.name} Logo`}
//           height={200} // Adjust height as needed
//         />
//         <div className="card-body">
//           <h5 className="card-title">{club.name}</h5>
//           <p className="card-text">{club.description.substring(0, 120)}...</p>
//           <Link
//             to={`#club-${club.id}`} // Link to the club details section
//             className="btn btn-dark"
//           >
//             Read More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container my-3 py-3">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="display-5 text-center">Clubs</h2>
//           <hr />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         {clubs.map((club) => (
//           <ClubCard key={club.id} club={club} />
//         ))}
//       </div>
//       {/* Additional sections for detailed club descriptions */}
//       {clubs.map((club) => (
//         <div key={`club-${club.id}`} className="row my-5" id={`club-${club.id}`}>
//           <div className="col-12">
//             <h3>{club.name}</h3>
//             <p>{club.description}</p>
//             {/* Add more detailed information here if needed */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("/assets/clubs.json") // Adjust path as needed
      .then((response) => response.json())
      .then((data) => setClubs(data.clubs));
  }, []);

  const ClubCard = ({ club }) => (
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" id={`club-${club.id}`}>
      <div className="card text-center h-100">
        <img
          className="card-img-top p-3"
          src={club.logo}
          alt={`${club.name} Logo`}
          height={200} // Adjust height as needed
        />
        <div className="card-body">
          <h5 className="card-title">{club.name}</h5>
          <p className="card-text">{club.description.substring(0, 120)}...</p>
          <Link
            to={`#club-${club.id}`} // Link to the club details section
            className="btn btn-dark"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`club-${club.id}`).scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Clubs</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
      {/* Additional sections for detailed club descriptions */}
      {clubs.map((club) => (
        <div key={`club-${club.id}`} className="row my-5" id={`club-${club.id}`}>
          <div className="col-12">
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            {/* Add more detailed information here if needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
