Vue.component('message', {
    template: '<li>This is hello message!</li>'
})

window.onload = function () {
    var main = new Vue({
        el: '#app',
        data: {
            message: 'THIS IS FROM JS!!!'
        }
    });
}