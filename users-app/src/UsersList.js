import React from 'react';
import './UsersList.css';

function UsersList(props){


    let usersList = props.usersList;
    let usersLiElements = usersList.map(user => 
         <li key={user.id}>{user.name}<span onClick={()=>props.removeUserMethod(user.id)}>X</span></li>//Tutaj jest generowany JSX naszej listy ul
         //Ale span ma zdarzenie onClick któa urucjhamia funkcję poprzez propsy = removeUserMethod (usuwa usera po ID)
    );
    console.log(usersList);

    return(
        <ul className="the-list">
            {usersLiElements}{/*Tutaj wstawiamy naszego JSX*/} 
         </ul>
    );
}

export default UsersList;