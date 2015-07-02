/*
 * Example use: <th o-table-sort field="id">Id</th>
 * params: (attribute field): this is the case-sensative key to sort on.
 */

angular.module('envoc.directives.datatables')
    .directive('oTableSort', oTableSortDirective);

function oTableSortDirective($document, $window) {
    return {
        restrict: 'A',
        scope: true,
        require: '^oTable',
        link: postLink
    };

    function postLink(scope, iElement, iAttrs, controller) {
        var propertyName = iAttrs.field;
        iElement.addClass('sorting');

        scope.$on('oTable::sorting', onTableSorting);
        iElement.on('click', onSortElClick);

        function clear() {
            if ($window.getSelection) {
                if ($window.getSelection().empty) { // Chrome
                    $window.getSelection().empty();
                } else if ($window.getSelection().removeAllRanges) { // Firefox
                    $window.getSelection().removeAllRanges();
                }
            } else if ($document.selection) { // IE?
                $document.selection.empty();
            }
        }

        function onSortElClick(e) {
            clear();
            scope.$evalAsync(function(){
                controller.sortOn(e.shiftKey, propertyName);
            });
        }

        function onTableSorting() {
            var sortInfo = controller.getSortingPropertyInfo(propertyName);
            var sortClasses = ['sorting_asc', 'sorting_desc'];

            angular.forEach(sortClasses, iElement.removeClass);

            if (sortInfo.sorting) {
                iElement.addClass('sorting_' + sortInfo.direction);
            }
        }
    }
}