import {useState} from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from '../../components/loader/Loader'
import * as supheroAPI from '../../services/hero-api'
import s from './AddHeroPage.module.css'

import { TextField, Container, Button, Input} from '@mui/material'

export default function AddHeroPage() {
    const [nickname, setNickname] = useState('')
    const [realName, setRealName] = useState('')
    const [powers, setPowers] = useState('')
    const [description, setDescription] = useState('')
    const [phrase, setPhrase] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    // const [id, setId] = useState('')

    const [isAdded, setIsAdded] = useState(false)
    const [loading, setLoading] = useState(false)

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

    function handleImageInput(evt){
        setSelectedFile(evt.target.files[0])
    }
    
    async function addImageToHero(id){
        const formData = new FormData()
        formData.append("name", nickname)
        formData.append("image", selectedFile)
        await supheroAPI.updateImageOfHero(id, formData).then(res => console.log(res))
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

        setLoading(true)

        await supheroAPI.sendHeroToBase(superhero).then((res) => {
            if(selectedFile){
                addImageToHero(res._id)
            } else {
                console.log(res)
            }
        })

        setLoading(false)
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
            <Container maxWidth="sm">
                <TextField id="outlined-basic" label="Nickname" margin="normal" required variant="outlined" size='small' fullWidth name='nickname' value={nickname} onChange={handleChange}/>
                <TextField id="outlined-basic" label="Real Name" margin="normal" required variant="outlined" size='small' fullWidth name='real_name' value={realName} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Superpowers" margin="normal" required multiline rows={6} fullWidth name='superpowers' value={powers} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Description" margin="normal" multiline rows={6}  fullWidth name='origin_description' value={description} onChange={handleChange} />
                <TextField id="outlined-multiline-static" label="Catch Phrase" margin="normal" multiline rows={6}  fullWidth name='catch_phrase' value={phrase} onChange={handleChange} />
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageInput} className={s.input}/>
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <Button variant="contained" href="#contained-buttons" onClick={handleSubmit}>
                    ADD
                </Button>
            </Container>
            
            </>
        ) : <Redirect to='/heroes'/>}
        {loading && <Spinner/>}
        </>
    )
}