import React, {Component} from 'react'
import Container from './Container';
import Footer from './Footer';
import './App.css';
import {getAllStudents} from './client';
import {LoadingOutlined} from '@ant-design/icons';
import AddStudentForm from "./forms/AddStudentForm";
import {
    Table,
    Avatar,
    Spin,
    Modal
} from 'antd';

const getIndicatorIcon = () => <LoadingOutlined style={{fontSize: 32}}/>;

class App extends Component {

    state = {
        students: [],
        isFetching: false,
        isAddStudentModalVisible: false
    }

    openAddStudentModalVisible = () => this.setState({isAddStudentModalVisible: true});

    closeAddStudentModalVisible = () => this.setState({isAddStudentModalVisible: false});

    fetchStudents = () => {
        this.setState({
            isFetching: true
        });
        getAllStudents()
            .then(res => res.json()
                .then(students => {
                        console.log(students);
                        this.setState({
                            students,
                            isFetching: false
                        });
                    }
                )
            );
    }

    componentDidMount() {
        this.fetchStudents();
    }

    render() {
        const {students, isFetching, isAddStudentModalVisible} = this.state;


        if (isFetching) {
            return (
                <Container>
                    <Spin indicator={getIndicatorIcon()}/>
                < /Container>
            );
        }
        if (students && students.length) {

            const columns = [
                {
                    title: '',
                    key: 'avatar',
                    render: (text, student) => (
                        <Avatar size="large">
                            {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
                        </Avatar>
                    )
                },
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
                    <Modal
                        title="Add new student"
                        visible={isAddStudentModalVisible}
                        onOk={this.closeAddStudentModalVisible}
                        onCancel={this.closeAddStudentModalVisible}
                        width={1000}
                    >
                        <AddStudentForm
                            onSuccess={() => {
                                this.closeAddStudentModalVisible();
                                this.fetchStudents();
                            }}
                        />
                    </Modal>
                    <Footer
                        numberOfStudents={students.length}
                        handleAddStudentClickEvent={this.openAddStudentModalVisible}
                    />
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
