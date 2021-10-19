
function viewModel(){
    let self  =this;
    self.hobby = ko.observable("");
    self.hobbies = ko.observableArray();  
}
const model = new viewModel();
model.addHobby= function(){
    this.hobbies.push(this.hobby());
    
}
ko.applyBindings(model);
