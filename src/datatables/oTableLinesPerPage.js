angular.module('envoc.directives.datatables')
  .directive('oTableLinesPerPage', oTableLinesPerPageDirective);

function oTableLinesPerPageDirective(oTableConfig) {
  return {
    restrict: 'A',
    replace: true,
    scope: true,
    templateUrl: oTableConfig.templates.oTableLinesPerPageUrl,
    require: '^oTable',
    link: function postLink(scope, iElement, iAttrs, controller) {
      scope.ctrl = controller;
    }
  };
}