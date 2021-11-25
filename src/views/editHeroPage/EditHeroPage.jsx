import {useState, useEffect} from 'react'
import { Redirect, useLocation, useHistory} from 'react-router-dom'
import { TextField, Container, Button, Input} from '@mui/material'

import s from './EditHeroPage.module.css'
import * as supheroAPI from '../../services/hero-api'


export default function EditHeroPage(props) {
    const location = useLocation()
    const history = useHistory()

    const [nick, setNick] = useState('')
    const [realName, setRealName] = useState('')
    const [powers, setPowers] = useState('')
    const [descr, setDescription] = useState('')
    const [phras, setPhrase] = useState('')

    const [selectedFile, setSelectedFile] = useState('')

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

    function handleImageInput(evt){
        setSelectedFile(evt.target.files[0])
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

        if(selectedFile){
            const formData = new FormData()
            formData.append("name", nick)
            formData.append("image", selectedFile)

            await supheroAPI.updateImageOfHero(_id, formData).then(res => console.log(res))
        }
    }

    return (
        <>
        {!isEdited ? (
            <>
            <h1>
                Edit {nickname}
            </h1>
            <Container maxWidth="sm">
                <TextField id="outlined-basic" label="Nickname" margin="normal" required variant="outlined" size='small' fullWidth name='nickname' value={nick} onChange={handleChange}/>
                <TextField id="outlined-basic" label="Real Name" margin="normal" required variant="outlined" size='small' fullWidth name='real_name' value={realName} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Superpowers" margin="normal" required multiline rows={6} fullWidth name='superpowers' value={powers} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Description" margin="normal" multiline rows={6}  fullWidth name='origin_description' value={descr} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Catch Phrase" margin="normal" multiline rows={6}  fullWidth name='catch_phrase' value={phras} onChange={handleChange} />
                <div className={s.btnWrapper}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageInput} className={s.input}/>
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    <Button variant="contained" href="#contained-buttons" onClick={handleSubmit}>
                        ADD
                    </Button>
                    <Button variant="contained" href="#contained-buttons" onClick={onGoBack}>
                        BACK
                    </Button>
                </div>
            </Container>
            </>
        ) : <Redirect to='/heroes'/>}
        </>
    )
}