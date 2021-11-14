import {useState, useEffect} from 'react'
import { Redirect, useLocation, useHistory} from 'react-router-dom'
import * as supheroAPI from '../../services/hero-api'
import s from './EditHeroPage.module.css'

export default function EditHeroPage(props) {
    const location = useLocation()
    const history = useHistory()

    const [nick, setNick] = useState('')
    const [realName, setRealName] = useState('')
    const [powers, setPowers] = useState('')
    const [descr, setDescription] = useState('')
    const [phras, setPhrase] = useState('')

    const [isEdited, setIsEdited] = useState(false)

    const {_id, nickname, real_name, superpowers, origin_description, catch_phrase} = props.props
    useEffect(() => {
        setNick(nickname)
        setRealName(real_name)
        setPowers(superpowers)
        setDescription(origin_description)
        setPhrase(catch_phrase)
    }, [nickname, real_name, superpowers, origin_description, catch_phrase])

    function handleChange (evt) {
        const {name, value} = evt.currentTarget;
        switch (name) {
            case 'nickname':
                setNick(value)
                break
                case 'real_name':
                    setRealName(value)
                    break
                    case 'superpowers':
                        setPowers(value)
                        break
                        case 'origin_description':
                            setDescription(value)
                            break
                            case 'catch_phrase':
                                setPhrase(value)
                                break
                        default:
                            return
        }
    }
    function reset(){
        setNick('')
        setRealName('')
        setPowers('')
        setPhrase('')
        setDescription('')
    }

    function onGoBack(){
        history.push(location.state?.from)
    }

    async function handleSubmit(evt){
        evt.preventDefault()

        const superhero = {
            nickname: nick,
            real_name: realName,
            superpowers: powers,
            origin_description: descr,
            catch_phrase: phras
        }

        await supheroAPI.updateHeroInfoById(_id, superhero).then(res => console.log(res))
        reset()
        setIsEdited(true)
    }

    return (
        <>
        {!isEdited ? (
            <>
            <h1>
                Edit {nickname}
            </h1>
            <div className={s.wrapper}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nickname"><p>Nickname: </p>
                        <input type="text" id='nickname' name='nickname' value={nick} onChange={handleChange} required className={s.input}/>
                    </label>
                    <label htmlFor="real_name"><p>Real Name: </p>
                        <input type="text" id='real_name' name='real_name' value={realName} onChange={handleChange} required className={s.input}/>
                    </label>
                    <label htmlFor="superpowers"><p>Superpowers: </p>
                        <textarea type='text' name="superpowers" id="superpowers" value={powers} onChange={handleChange} required className={s.textarea} />
                    </label>
                    <label htmlFor="origin_description"><p>Description: </p>
                        <textarea type="text" id='origin_description' name='origin_description' value={descr} onChange={handleChange} className={s.textarea}/>
                    </label>
                    <label htmlFor="catch_phrase"><p>Catch Phrase: </p>
                        <textarea type="text" id='catch_phrase' name='catch_phrase' value={phras} onChange={handleChange} className={s.textarea} />
                    </label>
                    <button type='submit' className={s.btn}>EDIT</button>
                    <button type='button' onClick={onGoBack} className={s.btn}>BACK</button>
                </form>
            </div>
            
            
            </>
        ) : <Redirect to='/heroes'/>}
        </>
    )
}