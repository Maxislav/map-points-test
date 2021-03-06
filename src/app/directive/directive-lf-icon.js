/**
 * Created by Администратор on 6/22/16.
 */
(function(){
    'use strict';

    angular.module('app')
        .directive('lfIcon',lfMarker );

    lfMarker.$inject = ['factoryMarker'];
    function lfMarker(factoryMarker){
        return {
            restrict: 'A',
            link: function(scope, el, attr){
                scope.clickMarker = function(position){
                    factoryMarker.setActive(scope);
                  //  scope.drawPoly(position)
                    scope.drawPoly(scope)
                }
            }
        }
    }

}());
