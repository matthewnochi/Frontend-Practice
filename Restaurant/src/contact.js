const mainContact = document.createElement("div");

const title = document.createElement("h2");
title.textContent = "Contact Us";
mainContact.appendChild(title);

const form = document.createElement("form");
mainContact.appendChild(form);

function createField(labelText, type, name, required = false) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    if (required) input.required = true;

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
}

createField('Name:', 'text', 'name', true);
createField('Email:', 'email', 'email', true);

const messageLabel = document.createElement('label');
messageLabel.textContent = 'Message:';
form.appendChild(messageLabel);

const messageInput = document.createElement('textarea');
messageInput.name = 'message';
messageInput.rows = 5;
messageInput.required = true;
form.appendChild(messageInput);
form.appendChild(document.createElement("br"));

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Send Message';
form.appendChild(submitButton);

export default mainContact;