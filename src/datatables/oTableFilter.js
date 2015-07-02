angular.module('envoc.directives.datatables')
    .directive('oTableFilter', oTableFilterDirective)
    .directive('oTableColumnFilter', oTableColumnFilterDirective);

function oTableFilterDirective() {
    return {
        restrict: 'A',
        scope: true,
        require: '^oTable',
        link: postLink
    };

    function postLink(scope, iElement, iAttrs, controller) {
        scope.$on('oTable::internalStateChanged', onInternalStateChanged);
        iElement.on('keyup change', setAllSearch);

        function onInternalStateChanged(){
          iElement.val(controller.state.allSearch);
        }
        
        function setAllSearch(){
            scope.$evalAsync(function(){
                controller.state.allSearch = iElement.val();
            });
        }
    }
}

function oTableColumnFilterDirective() {
    return {
        restrict: 'A',
        scope: true,
        require: '^oTable',
        link: postLink
    };

    function postLink(scope, iElement, iAttrs, controller) {
        var propertyName = iAttrs.field;

        iElement.on('keyup change', setAllSearch)
        
        function setAllSearch(){
            scope.$evalAsync(function(){
                controller.columnFilter(iElement.val(), propertyName);
            });
        }
    }
}