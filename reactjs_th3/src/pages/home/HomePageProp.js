import React, {useState} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import './../../assets/css/style.css';
import Social from '../../components/commons/Social';
const HomePageProp = () => {
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
        
    };
    const test = ()=> {
        alert("ok")
    }
    return (
        <div className="wrapper">
            {loading ?(
                <h1>loading...</h1>
            ):(
               <div>
                    <div>
               <Text text={"Hello: " +name}/>
               <Text text={"Age: " +age}/>
            </div>
            <Input labelText = "ten" 
            placeholderText = "vui long nhap ten"
            handleOnChange={(e) => setName(e.target.value)} 
            />
            <Input labelText = "tuoi" 
            placeholderText = "vui long nhap tuoi"
            handleOnChange={(e) => setAge(e.target.value)} 
            />
            <Button onClickHandle = {() => removeData()} btnText="Clear Data" />
               </div>
            )}
        </div>
    );
};

export default HomePageProp;