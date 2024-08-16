// const { normalizePath } = require("vite");

const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataFromLS === null) {
        return;
    }

    formData = formDataFromLS;
    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = formDataFromLS[key];
        }
    }
 };
fillFormFields();

const onFormFieldInput = event => {
    const fildName = event.target.name;
    const fieldValue = event.target.value.trim();
    
    formData[fildName] = fieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
    }
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);