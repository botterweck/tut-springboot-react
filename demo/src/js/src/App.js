import React, {Component} from 'react'
import Container from './Container';
import './App.css';
import {getAllStudents} from './client';
import {
    Table
} from 'antd';

class App extends Component {

    state = {
        students: []
    }

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        getAllStudents()
            .then(res => res.json()
                .then(students => {
                        console.log(students);
                        this.setState({
                            students
                        });
                    }
                )
            );
    }


    render() {
        const {students} = this.state;

        if (students && students.length) {

            const columns = [
                {
                    title: 'studentId',
                    dataIndex: 'studentId',
                    key: 'studentId'
                },
                {
                    title: 'First Name',
                    dataIndex: 'firstName',
                    key: 'firstName'
                },
                {
                    title: 'Last Name',
                    dataIndex: 'lastName',
                    key: 'lastName'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
                {
                    title: 'Gender',
                    dataIndex: 'gender',
                    key: 'gender'
                }
            ];

            return (
                <Container>
                    <Table
                        dataSource={students}
                        columns={columns}
                        pagination={false}
                        rowKey='studentId'/>
                </Container>
            );
        }

        return (
            <h1>No students found.</h1>
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
