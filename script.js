console.log('js loaded');

//created array of employees including example employees hard coded in index.html file
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
        salaryAnnual: 80000
    }
];

//creating monthly expense variable
let totalMonthly;

$(document).ready(handleReady);

//handle ready runs salary calculator and tracks clicks of submit button and delete buttons
function handleReady() {
    console.log('jq loaded');
    salarySummer();
    $('#submitEmployeeButton').on('click', employeeSubmit);
    $('tbody').on('click', '.delete-button', deleteRow)
};

//adds new employees to array & pushes to DOM
function employeeSubmit() {
    console.log('clicked submit button');
    if (canIRun()) {
        let newEmployee = {
            nameFirst: $('#firstNameInput').val(),
            nameLast: $('#lastNameInput').val(),
            iDNum: Number($('#iDInput').val()),
            empTitle: $('#titleInput').val(),
            salaryAnnual: Number($('#salaryInput').val()),
        };
        console.log('added:', newEmployee);
        employeeList.push(newEmployee)
        $('tbody').append(`
    <tr>
    <td scope="row" class="varGetter">${newEmployee.nameFirst}</td>
    <td>${newEmployee.nameLast}</td>
    <td>${newEmployee.iDNum}</td>
    <td>${newEmployee.empTitle}</td>
    <td class="dollars">${newEmployee.salaryAnnual}</td>
    <td><button class="delete-button">Delete</button></td>
    </tr>`)
    };
    clearInputs();
    salarySummer();
}

//removes employees from DOM & array
function deleteRow() {
    console.log('clicked a delete button');
    console.log('looking for ID',$(this).parent().prev().prev().prev().text())
    let searchVar = $(this).parent().prev().prev().prev().text();
    for (let i=0; i < employeeList.length; i++) {
        if (employeeList[i].iDNum == searchVar) {
            employeeList.splice(i,1);
        }
    }
    $(this).parent().parent().empty();
    salarySummer();
}

//checks to make sure all fields are complete before employees can be added to array & DOM
function canIRun() {
    console.log('checking complete fields');
    if ($('#firstNameInput').val() && $('#lastNameInput').val() && $('#iDInput').val() && $('#titleInput').val() && $('#salaryInput').val()) {
        console.log('all fields completed');
        return true;
    }
    else {
        console.log('missing field input(s)');
        $('#errorDisplay').append('<p>please complete all fields</p>');
        return false;
    }
}

//clears input fields after click
function clearInputs() {
    console.log('clearing inputs');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
    $('#errorDisplay').empty();
}

//calculates monthly salary expenses & displays whole number total to DOM
function salarySummer() {
    totalMonthly = 0;
    for (let i = 0; i < employeeList.length; i++) {
        totalMonthly = totalMonthly + employeeList[i].salaryAnnual / 12;
    }
    console.log('the current total monthly salary is', totalMonthly);
    if (totalMonthly >= 20000) {
        $('#salaryDisplay').addClass('pricy')
    }
    if (totalMonthly < 20000) {
        $('#salaryDisplay').removeClass('pricy')
    }
    $('#salaryDisplay').empty();
    $('#salaryDisplay').addClass('dollars');
    $('#salaryDisplay').append(totalMonthly.toFixed(0));
}

console.log('end script')