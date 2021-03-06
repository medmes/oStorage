var fs = require('fs');
var path = require('path');
require('bluebird').promisifyAll(fs);


module.exports = {
    getFiles: function (dirPath) {
        return fs.readdirAsync(dirPath)
            .filter(file => file.substring(0, 1) !== '.')
            .map(file => {
                var filePath = path.join(dirPath, file);
                return fs.statAsync(filePath)
                    .then(stats => {
                        return {
                            name: file,
                            type: stats.isFile() ? 'File' : 'Directory',
                            lastModified: stats.mtime,
                            path: filePath
                        }
                    })
            })
    }

}
