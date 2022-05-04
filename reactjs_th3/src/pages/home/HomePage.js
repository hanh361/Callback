import React, {useState} from 'react';
import Text from '../../components/commons/Text';
import Button from '../../components/commons/Button';
import '../../assets/css/style.css';
import Social from '../../components/commons/Social';
import Input from '../../components/commons/Input';
import styled from "styled-components"



const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: ${props => props.colorText ? props.colorText : 'red'};
    background: ${props => props.backgroundText ? props.backgroundText : 'rgba(255, 99, 71, 0.6)'}
`;

const HomePage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);

    const removeData = () => {
        setLoading(true);
        if(name.length && age.length){
            setTimeout(() =>{
                setLoading(false);
                setName("")
                setAge("");
            },5000)
          
        } else {
            setLoading(false);
            alert("Vui lòng bạn nhập lại. Chưa có chữ gì !!!");
        }
        
    }
    return (
       
        <div className="Home">
             {/* Đây là cách làm về props */}
            {loading ? (
                <Text text = "Loading..."/>
        ): (
        <div>
            <div>
                 <Title>Bài tập Style component 1</Title> 
                <Title colorText="Blue">Bài tập Style component 2</Title>   
                <Title colorText="Pink" backgroundText="#7B68EE	">Bài tập Style component 2</Title>   
                <Text text={"Hello bạn: " + name}/>
                <Text text={"Age: " + age}/>
            </div>
            <Input
                labelText="Tên bạn là  "
                placeholderText="Vui lòng nhập tên bạn"
                handleOnChange={(e) =>setName(e.target.value)}
            />
            <br/>
            <Input
                labelText="Tuổi bạn là "
                placeholderText="Vui lòng nhập tuổi bạn"
                handleOnChange={(e) =>setAge(e.target.value)}
            />
            <br/>
            <Button onClickHandle ={() => removeData()}  btnText = "Clear" />
        </div> 
        )}
    </div>
    );
};


export default HomePage;