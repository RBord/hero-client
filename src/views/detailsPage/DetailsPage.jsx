import {useState, useEffect} from 'react'
import {useLocation, useHistory, useParams, Redirect} from 'react-router-dom'
import EditHeroPage from '../editHeroPage/EditHeroPage'
import s from './DetailsPage.module.css'
import * as supheroAPI from '../../services/hero-api'

export default function DetailsPage(){
    const history = useHistory()
    const location = useLocation()
    const {heroId} = useParams()

    const [hero, setHero] = useState(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [needEdit, setNeedEdit] = useState(false)

    useEffect(()=>{
        supheroAPI.fetchHeroById(heroId).then(setHero)
    }, [heroId])

    function onGoBack(){
        history.push(location.state?.from)
    }

    function needEditHero(){
        setNeedEdit(true)
    }
    
    async function onDelete(evt){
        evt.preventDefault()

        await supheroAPI.deleteHeroById(heroId).then(res => console.log(res))
        setIsDeleting(true)
    }

    return (
        <>
        {hero && !needEdit && (
            <>
                <h1>Detail information about {hero.nickname}</h1>
                <div className={s.wrapper}>
                    <img src={`https://create-hero-app.herokuapp.com${hero.images}`} alt="image_of_hero" className={s.image}/>
                    <div className={s.infoContainer}>
                        <p><b>Real name: </b>{hero.real_name}</p>
                        <p><b>Superpowers: </b>{hero.superpowers}</p>
                        <p><b>Description: </b>{hero.origin_description}</p>
                        <p><b>Catch Phrase: </b>{hero.catch_phrase}</p>
                    </div>
                </div>
                <div className={s.wrapperBtns}>
                    <button type='button' onClick={onGoBack} className={s.btn}>BACK</button>
                    <button type='submit' onClick={onDelete} className={s.btn}>DELETE HERO FROM BASE</button>
                    <button type='button' onClick={needEditHero} className={s.btn}>EDIT HERO</button>
                </div>
                
            </>
        )}
        {isDeleting && <Redirect to="/heroes" />}
        {needEdit && (<EditHeroPage props={hero}/>)}
        </>
    )
}