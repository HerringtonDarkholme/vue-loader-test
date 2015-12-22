/**
 * Created by tcstory on 12/22/15.
 */

declare var require;
declare var Vue;

new Vue({
    el: 'body',
    components: {
        'nani': require('../components/nani.vue')
    }
})