(function(){
    angular
        .module("jagameCP")
        .controller("patientCtrl", patientCtrl);

    function patientCtrl(){

        var vm = this;
        vm.patient = {
            name:"Jones"
        };

        // patientInit();

        vm.toggleEditor = toggleEditor;
        vm.isEditorOn = false;


        function toggleEditor() {
            vm.isEditorOn = !(vm.isEditorOn);
            console.log("editor is now " + vm.isEditorOn);
        }



    }


})();