const checked = function(value, test) {
    if (value == undefined) return '';
    return value==test ? 'checked' : '';
}

module.exports = {
    checked
};