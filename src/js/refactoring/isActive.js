var $location = {
    path: function () {
        return '/statelawsregs';
    }
};
function isActive(path) {
    var locationPath = $location.path().substr(0, path.length);
    var paths = {
        laws: '/statelaws',
        lawsRegs: '/statelawsregs'
    };
    return (path === paths.lawsRegs && locationPath === paths.laws) 
    || locationPath === path;
};

console.warn(isActive(''));