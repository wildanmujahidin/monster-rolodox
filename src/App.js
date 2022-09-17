// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
    // console.log("filteredMonsters");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodox</h1>
      <SearchBox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monster'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//           // () => {
//           //   console.log('componentDidMount2', this.state);
//           // }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//       //sama dengan: (key dan value sama)
//       //return { searchField: searchField };
//     });
//   };

//   render() {
//     // console.log('render', this.state);

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search monster"
//           onChange={onSearchChange}
//         /> */}
//         <SearchBox
//           className='monster-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monster'
//         />
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
