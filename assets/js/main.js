/* 
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/

const { createApp } = Vue;

    createApp({
        data() {
            return {
                message: 'Hello World!',
                path: 'https://picsum.photos/800/400'
            }
        }
    }).mount('#app');