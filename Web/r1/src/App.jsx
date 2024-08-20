// import Counter from "./Counter";

// export const App = () => {      ---> For multiple exports 
//   return <></>;
// }

// const App = () => {
//   const testObject = {
//     studentName: 'studentName',
//     department: 'CS',
//     marks: {
//       js: {
//         total: 100,
//       },
//       python: {
//         total: 80,
//       },
//       react: {
//         total: 85,
//       }
//     }
//   }
//   return (
//     <>
//       <h1>Hi</h1>
//       <h2>Hello</h2>
//       <Counter buttonLabel='This is a Button' color='red' testObject={testObject}/>
//     </>
//   );
// };



// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const responseValue = await response.json();
//     console.log("🚀 ~ getData ~ responseValue:", responseValue);
//     setData(responseValue);
//   }
// }

// import Table from "./Table";

// import './App.css';
// import {useEffect, useState} from 'react';
// import Counter from "./Counter";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const updateCount = () => {
//     setCount(count + 1);
//   }
  
//   useEffect(() => {
//     console.log("🚀 ~ updateCount ~ count:", count)
//   }, [count]);
    
//   return (
//   <>
//     {loading && <h1>Loading...</h1>}
//     {!loading && (
//       <>
//         <h2>Hi</h2>
//         <Counter buttonLabel="App Cursor Button" count={count} updateCount={updateCount}/>
//       </>
//     )}
//   </>
//   )
// }

// export default App;              //---> For single export 

// import './App.css';
// import { useState } from "react";

// export const App = () => {
//   const [data, setData] = useState([]);
  
//   const getData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const responseValue = await response.json();
//     console.log("~getData~responseValue:", responseValue);
//     setData(responseValue);
//   };
  
//   const resetData = () => {
//     setData([]);
//     console.log("🚀 ~ App ~ data:", data)
//   };

//   const removeItem = (indexToBeRemoved) => {
//     const filteredData = [];
//     data.map((item, idx) => {
//       if(idx != indexToBeRemoved){
//         filteredData.push(item);
//       }
//     })
//     // const filteredData = data.filter((_, idx) => idx !== indexToBeRemoved);
//     console.log("🚀 ~ data.map ~ filteredData:", filteredData)
//     setData(filteredData);
//   }

//   return (
//     <>
//       <h1>Hi!</h1>
//       <h2>Gungun Varshney</h2>
//       <button onClick={() => getData()}>Get Data</button>
//       <button onClick={() => resetData()}>Reset Data</button>
//       <table>
//         <tr>
//           <th>S.No</th>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Action</th>
//         </tr>
//         {data.map((item, idx) => (
//           <tr key={idx}>
//             <td>{idx + 1}</td>
//             <td>{item.name}</td>
//             <td>{item.username}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td><button onClick={() => {
//               removeItem(idx)
//             }}>Remove</button></td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// };

// export default App;

import './App.css';
import LoginForm from './LoginForm';
import { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('____________')
  const [password, setPassword] = useState('____________')

  return <>
  <h1>Hello</h1>
  <h2>Hi</h2>
  <LoginForm/>
  {/* <p>The entered email is ____________ and password is ____________</p> */}
  <p>The entered email is {email} and password is {password}</p>
  </>
}

export default App;