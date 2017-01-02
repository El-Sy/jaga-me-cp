(function () {
    angular
        .module("jagameCP")
        .controller("patientCtrl", patientCtrl);

    function patientCtrl() {

        var vm = this;
        vm.patient = {
            personal: {
                name: "Jones Gareth",
                age: "80",
                DOB: "",
                gender: "M",
                relationship: "Father",
                residence: "Blk 77 Chua Chu Kang Road #45-809 S630987"
            },

            medical: {
                diagnosis: "Cancer",
                consumables:[
                    "drug1","drug2", "drug3"],
                provider: "Thompson Medical Centre"
            }

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