exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        var timeOut;

        function counter() {
            console.log(start++);
            if (start <= end) {
                timeOut = setTimeout(counter, 100);
            }
        }

        counter();
        return {
            cancel: function () {
                timeOut && clearTimeout(timeOut);
            }
        };
    }
};
