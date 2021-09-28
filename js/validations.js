// REGex validations and input's validations
let labels = document.querySelectorAll('label');
const [taskLabel, dateLabel, descriptionLabel] = labels;
const form = document.forms.formtask;
const { task, date, description } = form;
const newTask = document.querySelector(".nova-tarefa");
const dateNow = new Date().getTime();
export let checkValidationTask;
export let checkValidationDate;
export let checkValidationDescription;

//function to  transform a inputed string date in a real date
const inputedDate = date => {
    const [day, month, year] = date.split("/");
    const realDate = new Date(`${year}-${month}-${day}`).getTime();

    return realDate;
};

newTask.addEventListener("click", () => {
    if (checkValidationTask && checkValidationDate && checkValidationTask) {
        checkValidationTask = false;
        checkValidationDate = false;
        checkValidationDescription = false;
    }
});



//Validation for the Task Input
task.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){3,100})/.test(e.target.value)) {
        task.style.border = '2px solid lightgreen';
        taskLabel.innerHTML = `Tarefa`;
        taskLabel.style.color = "#000";
        checkValidationTask = true;

    } else {
        task.style.border = '2px solid lightsalmon';
        taskLabel.innerHTML = `Sua tarefa tem que ter pelo menos 3 letras`;
        taskLabel.style.color = "lightsalmon";
        checkValidationTask = false;
    }
});


task.addEventListener('focusout', () => {
    task.style.border = 'none';
});

function dateMask(value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1');
}

function checkDate(dateValue) {
    let dateRegex = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;

    if (dateRegex.test(dateValue)) {
        date.style.border = '2px solid lightgreen';
        dateLabel.innerHTML = `Data de Entrega`;
        dateLabel.style.color = "#000";
        checkValidationDate = true;
    }
    else {
        dateLabel.innerHTML = `Digite uma data válida!`;
        dateLabel.style.color = "lightsalmon";
        date.style.border = '2px solid lightsalmon';
        checkValidationDate = false;

    }

    if (inputedDate(dateValue) < dateNow) {
        dateLabel.innerHTML = `Digite uma data no futuro`;
        dateLabel.style.color = "lightsalmon";
        date.style.border = '2px solid lightsalmon';
        checkValidationDate = false;
    }
}


date.addEventListener('input', e => {
    e.target.value = dateMask(e.target.value);
    checkDate(e.target.value);
});
date.addEventListener('focusout', () => {
    date.style.border = 'none';
});

//Validation for the Description Input
description.addEventListener('input', (e) => {
    if (/(?=(?:.*[a-zA-Z]){10,1000})/.test(e.target.value)) {
        description.style.border = '2px solid lightgreen';
        descriptionLabel.style.color = "#000";
        descriptionLabel.innerHTML = `Descrição da Tarefa`;
        checkValidationDescription = true;

    } else {
        description.style.border = '2px solid lightsalmon';
        descriptionLabel.innerHTML = `A descrição tem que ter pelo menos 10 caracteres`;
        descriptionLabel.style.color = "lightsalmon";
        checkValidationDescription = false;
    }
});

description.addEventListener('focusout', () => {
    description.style.border = 'none';

});
