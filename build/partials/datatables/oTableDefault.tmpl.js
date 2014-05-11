(function(module) {
try {
  module = angular.module('envoc.directives.partials');
} catch (e) {
  module = angular.module('envoc.directives.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/oTemplates/datatables/oTableDefault.tmpl.html',
    '<pre>{{ctrl.state|json}}</pre>\n' +
    '<div class="dataTables_wrapper form-inline" role="grid">\n' +
    '    <div class="row">\n' +
    '        <div class="span6 pull-left">\n' +
    '            <div class="dataTables_length">\n' +
    '                <label>\n' +
    '                    Show\n' +
    '                    <select size="1" ng-model="ctrl.state.linesPerPage">\n' +
    '                        <option value="10">10</option>\n' +
    '                        <option value="25">25</option>\n' +
    '                        <option value="50">50</option>\n' +
    '                        <option value="100">100</option>\n' +
    '                    </select>\n' +
    '                    entries\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="span6 pull-right">\n' +
    '            <div class="dataTables_filter">\n' +
    '                <label>\n' +
    '                    Search:\n' +
    '                    <input type="text" o-table-filter>\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <table class="table table-striped dataTable">\n' +
    '        <thead>\n' +
    '            <tr role="row"></tr>\n' +
    '        </thead>\n' +
    '\n' +
    '        <tbody role="alert" aria-live="polite" aria-relevant="all">\n' +
    '            <tr ng-repeat="row in ctrl.data">\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="span6 pull-left">\n' +
    '            <div class="dataTables_info" id="user-table_info">\n' +
    '                {{ctrl.state.pageStartIdx + 1}} - {{ctrl.state.pageStopIdx}}\n' +
    '                of {{ctrl.state.iTotalDisplayRecords}}\n' +
    '                entries\n' +
    '                <span ng-show="ctrl.state.iTotalRecords !== ctrl.state.iTotalDisplayRecords">\n' +
    '                    (filtered from {{ctrl.state.iTotalRecords}})\n' +
    '                </span>\n' +
    '                </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="span6 pull-right">\n' +
    '            <div class="dataTables_paginate paging_bootstrap">\n' +
    '                <pagination total-items="ctrl.state.iTotalDisplayRecords" items-per-page="ctrl.state.linesPerPage" ng-model="ctrl.state.currentPage"></pagination>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
