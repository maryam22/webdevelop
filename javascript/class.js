"use strict"

class person{

   constructor(id,firstName,lastName){
   this.id = id;
   this.firstName = firstName;
   this.lastName = lastName;
   
   object.defineProperties(this, {
     "Id": { 
        get:function() {return id }
     },  
    "FirstName": {
        get: function () { return _firstName },
        set: function (value) { _firstName = value }
    },
    "LastName": {
        get: function () { return _lastName },
        set: function (value) { _lastName = value }
    }
    
});

this.getFullName = function () {
        return this.FirstName + " " + this.LastName;
}

}}

class manager extends person{
constructor(id, firstName,lastName,department) {
    super(id,firstName,lastName);
    this.department = department;
  }
  show() {
    return this.getFullName() + ', He works in ' +this.department ;
  }

}
var person1 = new person( 1,mary,BarP);