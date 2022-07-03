import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList';

class Users extends Component {
//Tworzenie pustej tablicy w trakcie inicjalizacji form
    constructor(props){
        super(props);

        this.state = {
            users: []
        };
    }
    //Dodawanie usera
    addUser = (event)=>{
        event.preventDefault();//Blok form, aby nigdzie nie wysłał be naszego zezwolenia
        console.log(this._inputName.value);
        //Następnie tworzony jest nowy obiekt usera
        let newUser = {
            id: Date.now(),//Niepowtarzalny numer id usera - od daty w milisekundach
            name: this._inputName.value //obiekt a naszego form, dokładany jest do naszej tablicy
        }
        console.log(newUser);

        this.setState((state)=>{
            return({
                users: state.users.concat(newUser)
            });
        });


        this._inputName.value = '';
    }
    //Ten ID jest przekazywany do metody w UsersList
    removeUser = (userID)=>{
       this.setState(state=>{
            return ({
                //Metoda setState uaktualnia stan a filter usuwa
                //Numer przejdzie, to usuwany, po to jest !==userID
                //do nowej tablicy przechodzą wszyscy oprócz 1
                users: state.users.filter(user=>user.id!==userID)
            })
       })
    }



    //Gdy zmienia się sstan, to cały komponent jest od nowa (i jego dzieci)
    render(){
        return(
            <div className="users-main">
                <h1>Users's list</h1>
                <form onSubmit={this.addUser}>
                    <input  ref={(element) =>{this._inputName=element}} type="text" className="" placeholder="Enter name"/>
                    <button type="submit">Add user</button>
                </form>
            
            <UsersList usersList={this.state.users} removeUserMethod = {this.removeUser}/>{/* Tworzony jest props z listą, to co wprowadzamy z form */}
            </div>
        );
    }
}

export default Users;
/*
Było dla statycznej listy: <UsersList usersList={[{id: 1, name:'Hans'},{id: 2, name: 'Julia'}]} />
Jest:  <UsersList usersList={this.state.users} />
*/