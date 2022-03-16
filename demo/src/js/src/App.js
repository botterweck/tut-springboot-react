import React, {Component} from 'react'
import './App.css';
import {getAllStudents} from './client';

class App extends Component {

    render() {
        getAllStudents().then(res => res.json().then(students => {
            console.log(students);
        }));
        return (
            <h1>Hello World!!</h1>
        );
    }

}

/*
function App() {
     getAllStudents().then(res => res.json().then(students => {
        console.log(students);
    }));

    return (
        <h1>Hello World!</h1>
    );
}
*/

export default App;
