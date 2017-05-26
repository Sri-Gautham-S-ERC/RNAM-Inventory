'use strict';

angular.module('rnaminventoryApp')
.service('employeeClientService',  function(){

	this.getColumnDefs = function(data){
      console.log(data);
    var result = [];
    result.push(
    { 
            'field': 'signum',
            'name': 'signum',
            'enableFiltering': false,
              'enableCellEdit' : true,
            'minWidth': 150
          }
    );
    for(var key in data.Mapping_dtls[0].months){
      var fieldName = 'Mapping_dtls[0].months.'.concat(key);
      result.push(
      { 
              'field': fieldName,
              'name': key,
              'enableFiltering': false,
              'enableCellEdit' : true,
              'minWidth' : 90,
          'cellClass' : function(grid, row, col) {
              if (grid.getCellValue(row,col) < 0) {
                return 'red';
              }
              else if (grid.getCellValue(row,col) > 0) {
                return 'orange';
              }
              else if (grid.getCellValue(row,col) === 0) {
                return 'green';
              }
            }
          }
      );
      }
      return result;
  };

});