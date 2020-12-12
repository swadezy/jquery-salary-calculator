console.log('js loaded');

let employeeList = [
    {
        nameFirst: 'John',
        nameLast: 'Doe',
        iDNum: 1234,
        empTitle: 'Senior Junior',
        salaryAnnual: 45000
    },
    {
        nameFirst: 'Jane',
        nameLast: 'Smith',
        iDNum: 5678,
        empTitle: 'Junior Senior',
        salaryAnnual: 75000
    }
];

$(document).ready(handleReady);

function handleReady() {
    console.log('jq loaded');
    $('#submitEmployeeButton').on('click', employeeSubmit);
};

function employeeSubmit() {
    console.log('clicked submit button');
    if (canIRun()) {
        let newEmployee = {
            nameFirst: $('#firstNameInput').val(),
            nameLast: $('#lastNameInput').val(),
            iDNum: $('#iDInput').val(),
            empTitle: $('#titleInput').val(),
            salaryAnnual: $('#salaryInput').val(),
        };
        console.log('added:', newEmployee);
        $('tbody').append(`
    <tr>
    <td scope="row">${newEmployee.nameFirst}</td>
    <td>${newEmployee.nameLast}</td>
    <td>${newEmployee.iDNum}</td>
    <td>${newEmployee.empTitle}</td>
    <td>${newEmployee.salaryAnnual}</td>
    <td><button>Delete</button></td>
    </tr>`)
    };
}

function canIRun() {
    console.log('checking complete fields');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    if ($('#firstNameInput').val() && $('#lastNameInput').val() && $('#iDInput').val() && $('#titleInput').val() && $('#salaryInput').val()) {
        console.log('all fields completed');
        return true;
    }
    else {
        console.log('missing field input(s)');
        $('#errorDisplay').append('<p>please complete all fields</p>')
        return false;
    }
}


console.log('end script')