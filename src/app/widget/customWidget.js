/* global define */
(function (window) {
    'use strict';
    function myLibrary() {
        var myVar = '';

        var myLibraryObject = {
            fullName: fullName
        };

        return myLibraryObject;

        function fullName(firstName, lastName) {
            return alert(firstName + " " + lastName + "!");
        }
    }
    
    if(typeof(window.customWidget) === 'undefined'){
        window.customWidget = myLibrary();
    }
})(window);