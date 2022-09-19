Vue.createApp({
    data: () => {
        return {
            ideas: [],
            enteredValue: ""
        }
    },
    methods: {
        addIdeas() {
            this.ideas.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
}).mount('#app');

// const h1Elem = document.querySelector("h1");

// function changeWord() {
//     h1Elem.innerHTML = "Hello aslam"
// }

// h1Elem.addEventListener('click', changeWord);