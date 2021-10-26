Vue.component('hello-message', {
    template: '<li>This is hello message!</li>'
})

new Vue({
    el: "#app",
    data: {
        message: "HELLO FROM VUE!!!"
    }
});