import axios from 'axios';
import {createElement} from './domHelpers.js';
import {handleCategoryClick} from './eventHandlers.js';
import '../scss/styles.scss';
import {basicUrl} from './common.js';


document.addEventListener('DOMContentLoaded', async () => {
    const menuParent = document.getElementById('menu');


    const {data} = await axios(`${basicUrl}/api/categories`);
        data.forEach(item => {
            createElement('li',
                menuParent, item.name,
                {'data-id': item.id, className: 'menu-item'},
                {click: handleCategoryClick});

        });

})

