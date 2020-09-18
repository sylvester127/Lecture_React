import React, {Component} from 'react';

export default class AttendanceBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                {name: 'Mike'},
                {name: 'Jane'},
                {name: 'Susan'},
                {name: 'Steve'},
                {name: 'Brad'},
                {name: 'Leo'},
                {name: 'John'},
                {name: 'Sam'}
                // key에 객체 id를 넣는 방법
                // {id: 1, name: 'Mike'},
                // {id: 2,name: 'Jane'},
                // {id: 3,name: 'Susan'},
                // {id: 4,name: 'Steve'},
                // {id: 5,name: 'Brad'},
                // {id: 6,name: 'Leo'},
                // {id: 7,name: 'John'},
                // {id: 8,name: 'Sam'}
            ]
        };
    }

    render(){
        let {students} = this.state;
        const studentList = students.map((student) => 
            <li>{student.name}</li>
            // <li key={student.id}>{student.name}</li>
        );

        return (
            <div>
                <ui>
                    {studentList}
                </ui>

            </div>
        );
    }
}