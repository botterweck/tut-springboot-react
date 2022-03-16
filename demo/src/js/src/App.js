import logo from './logo.svg';
import './App.css';
import {getAllStudents} from './client';

function App() {
     getAllStudents().then(res => res.json().then(students => {
        console.log(students);
    }));

    return (
        <h1>Hello World!</h1>
    );
}

/*function App() {
    return(
        <>
        getAllStudents().then(res => res.json()).then(students => {
            console.log(students);
        }))
        <h1>Hello World!</h1>
        </>
    );
}
*/


export default App;
