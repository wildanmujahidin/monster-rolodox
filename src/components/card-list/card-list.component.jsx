// import { Component } from "react";

import "./card-list.styles.css";
import Card from "./card/card.component";

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     // console.log("render CardList");
//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           //   const { name, email, id } = monster;
//           return (
//             // <div className='card-container' key={id}>
//             //   <img
//             //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//             //     alt={`monster ${name}`}
//             //   />
//             //   <h2>{name}</h2>
//             //   <p>{email}</p>
//             // </div>
//             // <Card key={id} name={name} email={email} id={id} />
//             <Card key={monster.id} monster={monster} />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
