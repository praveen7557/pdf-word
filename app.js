var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test.html', 'utf8');
var options = {
    format: 'A4',
    border: {
        "top": "0.5in",            // default is 0, units: mm, cm, in, px
        "right": "0.5in",
        "bottom": "0.5in",
        "left": "0.5in"
    }, "header": {
        "height": "45mm",
        "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

pdf.create(html, options).toFile('./test2.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});