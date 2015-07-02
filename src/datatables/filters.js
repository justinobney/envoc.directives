angular.module('envoc.directives.datatables')
    .filter('startFrom', startFromFilter);

function startFromFilter() {
    return startFrom;

    function startFrom(input, start) {
        if (input === undefined) {
            return input;
        } else {
            return input.slice(+start);
        }
    };
}
