import React, {useState} from 'react';

const Text = () => {
    const [name, setName] = useState("Hạnh")
    const [age, setAge] = useState(22)
    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    );
};

export default Text;