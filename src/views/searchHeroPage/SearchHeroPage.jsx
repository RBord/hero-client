// import {useState, useEffect} from "react";
// import {Link, useLocation, useHistory} from 'react-router-dom'
// import * as supheroAPI from '../../services/hero-api'

// export default function SearchHeroPage(){
//     const location = useLocation()
//     const history = useHistory()

//     const [heroName, setHeroName] = useState('')
//     const [heroes, setHeroes] = useState([])

//     useEffect(()=>{
//         if(heroName === '') return
//         async function getHeroesByQuery(){
//             try {
//                 await supheroAPI.fetchHeroByName(heroName).then(setHeroes)
//                 history.push({...location, search:`/${heroName}`})
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }
//         getHeroesByQuery()
//     }, [heroName])

//     return (
//         <>
//         <form
//             onSubmit={e => {
//             e.preventDefault();
//             setHeroName(e.target.elements.heroName.value);
//             }}
//         >
//             <input
//             type="text"
//             name="heroName"
//             autoFocus
//             placeholder="Search superhero"
//             />
//             <button type="submit">
//             Search
//             </button>
//         </form>
//         <hr />
//         {heroes && (
//             <ul>
//             {heroes.map(({ _id, nickname }) => (
//                 <li key={_id}>
//                 <Link
//                     to={{
//                     pathname: `/heroes/${_id}`,
//                     state: { from: location },
//                     }}
//                 >
//                     {nickname}
//                 </Link>
//                 </li>
//             ))}
//             </ul>
//         )}
//         </>
//     )
// }