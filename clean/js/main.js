//test miesje is een leukerd
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
})();
;
//test miesje is een leukerd
var Lala = (function () {
    function Lala(dada) {
        this.dada = dada;
    }
    Lala.prototype.mama = function () {
        return "<h1>" + this.dada + "</h1>";
    };
    return Lala;
})();
;
var Henker = (function () {
    function Henker(henker) {
        this.henker = henker;
    }
    Henker.prototype.henk = function () {
        return "<h1>" + this.henker + "</h1>";
    };
    return Henker;
})();
;
