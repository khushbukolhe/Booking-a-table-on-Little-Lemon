import { useState } from 'react'

const Login = () => {

   /*  const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

   const  handleSubmit =()=>{
        if (userName === 'abc' && password === '123'){
            setError('')
        } else{
            setError("Inavlaid Login")
        }
    }
 */

const [data, setdata] = useState({
    userName:'',
    password:''
})

const [error, setError] = useState('');

const SetFields = (props) => {
    setdata(
        {
        ...data,
        [props.target.name]:props.target.value
        }
    )
}

const handleSubmit =()=>{
    if (data.userName === 'abc' && data.password === '123'){
        setError('')
    } else{
        setError("Inavlaid Login")
    }


}

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={data.userName} name='userName' onChange={SetFields}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={data.password}  name='password' onChange={SetFields}/>
            </div>
            <div>
                <button type='submit'> Submit </button>
            </div>
            {error?? <p style={{color: 'red' }}>{error}</p>}
        </form>
    )
}

export default Login;