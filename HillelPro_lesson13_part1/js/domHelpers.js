function createElement(tagName, parentElement, content, attributes, handlers) {
    let parent;
    if (typeof parentElement === 'string') {
        parent = document.querySelector(parentElement);
    } else {
        parent = parentElement;
    }


    const element = document.createElement(tagName);

    if (content) {
        element.textContent = content;
    }
    for (let attribute in attributes) {
        if (attribute === 'className') {
            element.setAttribute('class', attributes[attribute]);
        } else {
            element.setAttribute(attribute, attributes[attribute]);
        }

    }
    for (let eventName in handlers) {
        element.addEventListener(eventName, handlers[eventName]);
    }

    parent.appendChild(element);

    return element;
}

function removeElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).remove()
    } else {
        element.remove()
    }
}