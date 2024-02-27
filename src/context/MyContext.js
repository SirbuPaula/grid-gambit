

// import React from 'react';
import {createContext} from "react";

const MyContext = createContext([]);
// export const useMyContext = () =>useContext(MyContext);

// export const AuthContextProvider = ({children,}) => {
//     const [user, setUser] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     return (
//         <MyContext.Provider value={{}}>
//             {<div>Loading...</div>}
//         </MyContext.Provider>
//     );
// };


// export default function GlobalState(){
//     return(
//      <div>{useMyContext}</div>
//     )
// }

export default MyContext;