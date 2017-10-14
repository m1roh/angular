// MAIN CONTROLLER
function mainController() {
  let vm = this;
  let users = [];

  vm.add = function() {
    users.push(new Array(vm.firstName, vm.lastName, vm.email));
    vm.firstName = null;
    vm.lastName = null;
    vm.email = null;
  }

  vm.users = users;
}
