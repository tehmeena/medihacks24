import React from 'react';

const sampleUsers = [
    {
        id: 1,
        firstname: 'Pregnant',
        middlename: 'J',
        lastname: 'Doe',
        dob: '1990-01-01',
        gender: 'woman',
        country: 'unitedstates',
        email: 'pregnant.doe@example.com',
        phone: '1234567890',
        username: 'pregnant',
        password: 'Password1!',
        role: 'pregnant',
        weeksPregnant: 5,
        profession: null,
        licenseNumber: null,
    },
    {
        id: 2,
        firstname: 'Doctor',
        middlename: 'B.',
        lastname: 'Smith',
        dob: '1992-02-02',
        gender: 'intersex',
        country: 'unitedstates',
        email: 'doctor.smith@example.com',
        phone: '2345678901',
        username: 'doctor',
        password: 'Password2@',
        role: 'provider',
        weeksPregnant: null,
        profession: 'physician',
        licenseNumber: '123',
    },
    {
        id: 3,
        firstname: 'Dietitian',
        middlename: 'C.',
        lastname: 'Johnson',
        dob: '1994-03-03',
        gender: 'woman',
        country: 'unitedstates',
        email: 'dietitian.johnson@example.com',
        phone: '3456789012',
        username: 'dietitian',
        password: 'Password3#',
        role: 'provider',
        weeksPregnant: null,
        profession: 'dietitian',
        licenseNumber: '321',
    }
];

export default sampleUsers;