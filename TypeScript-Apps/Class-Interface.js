var ErrorHandler = (function () {
    function ErrorHandler(settings) {
        this.logAllExceptions = settings.logAllExceptions;
    }
    ErrorHandler.prototype.logException = function (message, id) {
        this.exceptions.push({ message: message, id: id });
    };
    return ErrorHandler;
}());
