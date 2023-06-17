const crypto = require('crypto')

function slugify(string) {
    const a = 'àáäâãåæçèéëêìíïîñòóöôõøœßùúüûñç·/_,:;';
    const b = 'aaaaaaaaceeeeiiiinoooooooeosuuuunc------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

function toSha256(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

function getPagination(itemPerPage, pageNumber) {
    const data = {
        offset: (pageNumber - 1) * itemPerPage,
        limit: itemPerPage
    };

    return data;
}

module.exports = {
    slugify,
    toSha256,
    getPagination
}