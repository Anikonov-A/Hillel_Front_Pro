// import {createElement} from "./domHelpers.js";
//
// export function createModalWindow() {
//     const modal = createElement(`div`, `body`, ``, {
//         className: 'modal fade',
//         id: "burgerModal",
//         'tab-index': "-1",
//         "aria-labelledby": "burgerModalLabel",
//         "aria-hidden": "true"
//     });
//     const modalDialog = createElement(`div`, modal, ``);
//     const modalContent = createElement(`div`, modalDialog, ``);
//     const modalHeader = createElement(`div`, modalContent, ``);
//     createElement(`h5`, modalHeader, `Modify your burger`, {className: "modal-title", id: "burgerModalLabel"})
//     createElement(`button`, modalHeader, ``, {
//         type: "button",
//         className: "btn-close",
//         "data-bs-dismiss": "modal",
//         "aria-label": "Close"
//     });
//     const modalBody = createElement(`div`,modalContent,``);
//     const form = createElement(`form`,modalBody,``,{className:"order-card d-flex flex-column"});
//     createElement(`h2`,form,`Choose hamburger size:`);
//     createElement(`label`,form,`Big Hamburger(+100 $)`,{for:"big"});
//     createElement(`input`,form,``,{type:"radio",id:"big",name:"size", checked:"true"});
//     createElement(`label`,form,`Small Hamburger(+50 $)`,{for:"small"});
//     createElement(`input`,form,``,{type:"radio",id:"small",name:"size"});
//     createElement(`h2`,form,`Choose stuffing: `);
//     createElement(`label`,form,`Add cheese (+10 $)`,{for:"cheese"});
//     createElement(`input`,form,``,{type:"radio",id:"cheese",name:"stuffing"});
//     createElement(`label`,form,`Add salad (+20 $)`,{for:"salad"});
//     createElement(`input`,form,``,{type:"radio",id:"salad",name:"stuffing"});
//     createElement(`label`,form,`Add fries (+15 $)`,{for:"fries"});
//     createElement(`input`,form,``,{type:"radio",id:"fries",name:"stuffing"});
//     createElement(`label`,form,`Add seasoning (+15 $)`,{for:"seasoning"});
//     createElement(`input`,form,``,{type:"radio",id:"seasoning",name:"stuffing"});
//     createElement(`label`,form,`Add mayo (+20 $)`,{for:"mayo"});
//     createElement(`input`,form,``,{type:"radio",id:"mayo",name:"stuffing"});
//     const modalFooter = createElement(`div`,modalBody,``)
//     createElement(`button`,modalFooter,`Close`,{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",id:"close"});
//     createElement(`button`,modalFooter,`Add to card`,{type:"button",className:"btn btn-primary",id:"addToCart"})
//     return modal
// }
