import React, {useState} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import './../../assets/css/style.css';
import Social from '../../components/commons/Social';
const HomePage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);
    const removeData = () => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 5000)
        if(name && age){
            setName("")
            setAge('')
        }else{
            setLoading(false);
            alert("vui lòng nhập giá trị");
            return false;
        }
        
    }
    return (
        <div className="wrapper">
            {loading ? (
                <h1>Loading...</h1>
            ): (
            <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    <br/>
                    <br/>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age"/>
                    <h1>Hello:  {name}</h1>
                    <h2>Age: {age}</h2>
            </div> 
            )}
            <button disabled={loading ? true : false} onClick={() =>removeData()}> Remove </button>
        </div>
    );
};

export default HomePage;