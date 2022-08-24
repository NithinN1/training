(function(global,$){
    var Greetr=function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }
    var supportedlangs=["en","es"];
    var greetings={
        en:"Hello",
        es:"Hola"
        
    };
    var formalGreetings={
        en:"Greetings",
        en:"Salute"
    };
    
    Greetr.prototype={};
    Greetr.init=function(firstName,lastname,language){
        var self=this;
        self.firstName=firstName || '';
        self.lastName=lastname || '';
        self.language=language || 'en';
    }
    
    Greetr.init.prototype=Greetr.prototype;
    global.Greetr=global.G$=Greetr;
    
}(window,jQuery));