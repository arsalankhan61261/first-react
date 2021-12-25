import { useState } from 'react';
import { StudentItem } from '..';

const Students = ({students}) => {
    return (
        <div>
            <h2>Students</h2>
            <ul>
                {
                    students.map((student, index) => <StudentItem key={index} index={index} student={student} />)
                }
            </ul>
        </div>
    )
}

export default Students;