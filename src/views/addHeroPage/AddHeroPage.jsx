import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import * as supheroAPI from '../../services/hero-api'
import s from './AddHeroPage.module.css'

export default function AddHeroPage() {
    const [nickname, setNickname] = useState('')
    const [realName, setRealName] = useState('')
    const [powers, setPowers] = useState('')
    const [description, setDescription] = useState('')
    const [phrase, setPhrase] = useState('')

    const [isAdded, setIsAdded] = useState(false)

    function handleChange (evt) {
        const {name, value} = evt.currentTarget;
        switch (name) {
            case 'nickname':
                setNickname(value)
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
        setNickname('')
        setRealName('')
        setPowers('')
        setPhrase('')
        setDescription('')
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        const superhero = {
            nickname: nickname,
            real_name: realName,
            superpowers: powers,
            origin_description: description,
            catch_phrase: phrase
        }
        
        await supheroAPI.sendHeroToBase(superhero).then(res => console.log(res))
        reset()
        setIsAdded(true)
    }


    return (
        <>
        {!isAdded ? (
            <>
            <h1>
                Add Hero
            </h1>
            <div className={s.wrapper}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nickname"><p>Nickname: </p>
                        <input type="text" id='nickname' name='nickname' value={nickname} onChange={handleChange} required className={s.input}/>
                    </label>
                    <label htmlFor="real_name"><p>Real Name: </p>
                        <input type="text" id='real_name' name='real_name' value={realName} onChange={handleChange} required className={s.input}/>
                    </label>
                    <label htmlFor="superpowers"><p>Superpowers: </p>
                        <textarea type='text' name="superpowers" id="superpowers" value={powers} onChange={handleChange} required className={s.textarea}/>
                    </label>
                    <label htmlFor="origin_description"><p>Description: </p>
                        <textarea type="text" id='origin_description' name='origin_description' value={description} onChange={handleChange} className={s.textarea}/>
                    </label>
                    <label htmlFor="catch_phrase"><p>Catch Phrase: </p>
                        <textarea type="text" id='catch_phrase' name='catch_phrase' value={phrase} onChange={handleChange} className={s.textarea}/>
                    </label>
                    
                    <button type='submit' className={s.btn}>ADD</button>
                </form>
            </div>
            </>
        ) : <Redirect to='/heroes'/>}
        </>
    )
}