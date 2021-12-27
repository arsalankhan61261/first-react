import { useState } from 'react';
import { StudentItem } from '..';

const Students = ({students}) => {
    // console.log(students);
    return (
        <div>
            <h2>Students</h2>
            {
                students.length === 0 && (
                    <p>No Students found</p>
                )
            }
            <ul>
                {
                    students.map((student, index) => <StudentItem key={index} index={index} student={student} />)
                }
            </ul>
        </div>
    )
}

export default Students;