'use strict';

angular.module('rnaminventoryApp')
  .controller('ProjectsCtrl',['projectsService', 'projectsClientService', 'uiGridConstants', function (projectsService, projectsClientService, uiGridConstants) {
    console.log('projects');
    var proj = this;
    proj.origFormData = {};
    proj.formVisibility = false;
    proj.formData = {};
    proj.gridOptions = {
        'enableSorting': true,
        'enableFiltering': true,
        'showGridFooter': true,
        'enableRowSelection': true,
        'enableRowHeaderSelection' : false,
        'multiSelect' : false,
        'modifierKeysToMultiSelect' : false,
        'noUnselect' : true,
        onRegisterApi: function(gridApi){
          proj.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged(null, function(row){
            projectsService.getProjectById(row.entity.projId)
              .then(function(response){
                proj.origFormData = response.data;
                proj.formData = Object.assign({}, proj.origFormData);
                console.log(proj.formData);
                proj.formVisibility = true;
              }, function(error){
                console.log('Unable to load project data: ' + error.message);
              });
          });
        }
    };

    proj.reset = function(){
      console.log(proj.origFormData);
      proj.formData = Object.assign({}, proj.origFormData);
    };
    proj.toggleFiltering = function(){
      proj.gridOptions.enableFiltering = !proj.gridOptions.enableFiltering;
      proj.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
    };

    projectsService.getProjectsUtilization()
        .then(function (response) {
                proj.gridOptions.columnDefs = projectsClientService.getColumnDefs(response.data[0]);
                proj.gridOptions.data = response.data;
            }, function (error) {
                console.log('Unable to load project utilization data: ' + error.message);
            });
        proj.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);


