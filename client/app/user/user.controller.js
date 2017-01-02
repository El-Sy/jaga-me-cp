(function(){
    angular
        .module("jagameCP")
        .controller("userCtrl", userCtrl);

    function userCtrl(){

            var vm = this;
        vm.user = {
            name:"Tom Gareth",
            email:"tom.gareth@gmail.com",
            mobile:"8775172",
            residence: "Blk 77 Chua Chu Kang Road #45-809 S630987"
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