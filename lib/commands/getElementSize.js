module.exports = function getElementSize (cssSelector, callback) {

    var self = this;

    this.element('css selector', cssSelector, function(err, result) {

        if(err === null && result.value) {

            self.elementIdSize(result.value.ELEMENT, function(err, result) {
                if (typeof callback === "function") {
                    callback(err, result.value);
                }
            });

        } else {

            if (typeof callback === "function") {
                callback(err, result);
            }

        }
    });
};
