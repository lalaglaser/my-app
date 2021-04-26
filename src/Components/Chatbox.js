import React from 'react'; 

const Chatbox = props => (
     <ul>
        {
        props.item.map((item, index) => <li key={index}>{item}</li>)
        }

    </ul>


);

export default Chatbox;