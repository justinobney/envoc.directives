angular.module('envoc.directives.datatables')
  .directive('oTablePagination', oTablePagination);

function oTablePagination(oTableConfig) {
  return {
    restrict: 'A',
    scope: true,
    templateUrl: oTableConfig.templates.oTablePaginationUrl,
    require: '^oTable',
    link: postLink
  };

  function postLink(scope, iElement, iAttrs, controller) {
    var defaultPaginationSettings = {
      maxSize: 5,
      previousText: 'Previous',
      nextText: 'Next',
      directionLinks: true,
      rotate: true
    };

    scope.ctrl = controller;
    scope.ctrl.paginationSettings = angular
      .extend(defaultPaginationSettings, scope.ctrl.paginationSettings);
  }
}