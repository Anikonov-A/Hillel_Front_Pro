// class CreateDomElement {
//     constructor({element, attributes, content, parentElement, handlers}) {
//         this.element = this.createElement(element);
//         this.setAttributes(attributes);
//         this.setContent(content)
//         this.appendTo(parentElement)
//         this.setHandler(handlers)
//
//     }
//
//     createElement = function (element) {
//         return document.createElement(element)
//     }
//     setAttributes = function (attributes) {
//         attributes.forEach(attributeObj => {
//             for (let key in attributeObj) {
//                 if (key === 'className') {
//                     this.element.setAttribute('class', attributeObj[key]);
//                 } else {
//                     this.element.setAttribute(key, attributeObj[key]);
//                 }
//             }
//         })
//     }
//     setContent = function (content) {
//         this.element.textContent = content;
//     }
//     appendTo = function (parentElement) {
//         const parent = typeof parentElement === 'string' ? document.querySelector(parentElement) : parentElement;
//         parent.appendChild(this.element);
//     }
//
//     setHandler = function (handlers) {
//         for (let eventName in handlers) {
//             this.element.addEventListener(eventName, handlers[eventName]);
//         }
//     }
// }

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