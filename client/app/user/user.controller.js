(function(){
    angular
        .module("jagameCP")
        .controller("userCtrl", userCtrl);

    function userCtrl(){

            var vm = this;
        vm.user = {
            username:"Tom"
        };

        vm.toggleEditor = toggleEditor;
        vm.isEditorOn = false;

        // userInit();

        function toggleEditor() {
            vm.isEditorOn = !(vm.isEditorOn);
            console.log("editor is now " + vm.isEditorOn);
        }


    }



})();