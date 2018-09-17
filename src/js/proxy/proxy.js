var p = new Proxy({
    prop1: 100,
    prop2: undefined
}, {
    get: function(target, prop) {
        return (prop in target) ? target[prop] : 'GET_ERROR_MESSAGE';
    },
    deleteProperty: function (target, name) {
        return false;
    }
});

// delete p.prop1;

console.log(p.prop1);
console.log(p.prop2);
console.log(p.prop3);