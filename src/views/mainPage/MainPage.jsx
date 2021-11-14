import {useState, useEffect} from "react";
import {Link, useLocation} from 'react-router-dom'
import Spinner from "../../components/loader/Loader";
import * as supheroAPI from '../../services/hero-api'
import s from './MainPage.module.css'

export default function MainPage(){
    const location = useLocation()
    const [heroes, setHeroes] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        await supheroAPI.fetchAllHeroes().then(setHeroes)
        setLoading(false)
    }, [])


    return (
        <>
            <h1>All Superheroes in Base</h1>
            {heroes && !loading && (
                <ul className={s.list}>
                    {heroes.map(({_id, nickname, images}) => {
                        return (
                            <li key={_id} className={s.wrapper}>
                                <Link to={{
                                    pathname:`/heroes/${_id}`,
                                    state: {from: location},
                                }} className={s.link}>
                                        <p className={s.nickname}>{nickname}</p>
                                        <img src={`https://create-hero-app.herokuapp.com${images}`} alt={nickname} className={s.img}/>
                                    
                                </Link>
                                
                            </li>
                        )
                    })
                }
                </ul>
            )}
            {loading && <Spinner/>}
        </>
    )
}