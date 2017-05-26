'use strict';

angular.module('rnaminventoryApp')
.service('projectsClientService',  function(){

	this.getColumnDefs = function(data){
		var result = [];
		result.push(
		{ 
            'field': 'projName',
            'name': 'Project Name',
            'pinnedLeft' : true,
            'enableCellEdit' : false,
            'minWidth': 150,
            'cellClass' : 'red',
        }
		);
		for(var key in data.needGapDtls.months){
			var fieldName = 'needGapDtls.months.'.concat(key);
			result.push(
			{ 
	            'field': fieldName,
	            'name': key,
	            'enableFiltering': false,
	            'enableCellEdit' : true,
	            'minWidth' : 90,
			    'cellClass' : 'red'
	        }
			);
	   	}
	   	return result;
	};
	this.getUtilGridData = function(data){
		var result = [];
		data.forEach(function(item){
			var row = {
				'projId' : item.projId,
				'projName' : item.projName,
				
			};
			result.push(row);
		});
		return result;
	};
});