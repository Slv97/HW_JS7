let Kettle = function (){
    this.get = function(){

        this.mode = +prompt ('Чтобы включить чайник нажмите - 1, чтобы выклчить - 0');    
      
        this.regime();        

        //this.specifications();          
       
    };

    this.regime = function(){

        if (this.mode == 1){
            alert ('Чайник включён');

            this.v = +prompt ('Введите объем воды, который хотите нагреть, например 1 (литр)');

            this.tk = +prompt ('Введите температуру воды, которую хотите получить, например 60 (градусов)');

            this.tn = +prompt ('Введите начальную температуру воды, например 10 (градусов)');

            this.power = +prompt ('Введите мощность чайника от 0 до 2200 (Вт)');
        
            this.show();

        } else if (this.mode == 0){
            alert ('Чайник выключён');
            
        } else {
            alert ('Упс. Попробуй еще раз.');
            this.get();
        };
        
        
    };

    this.show = function() {

        let t = 60 * this.v * (this.tk - this.tn) / this.power;

        alert('Время нагревания воды равно ' + t + ' (минут)');

        this.price =  +prompt ('Введите ориентировочную стоимость чайника');

        this.cost();
    };   

    this.cost = function(){
        if (this.price < 18){
            alert ('Модель, которая вам подходит - Электрочайник L Ornay LA-4612');
        } else if (this.price < 130 ){
            alert ('Модель, которая вам подходит - Электрочайник Braun WK 300 Black');
        } else if (this.price < 991 ){
            alert ('Модель, которая вам подходит - Электрочайник Bork k810');
        } else {
            alert ('Упс. Попробуй еще раз.');
            this.get();
        };
        
    };

    /* this.specifications = function(){
        if (this.power < 1300){

            let a;
            console.log(a + this.power + ' мощность устройства');

        } else if (this.power < 2200 ){

            let b;
            console.log(b + this.power  + ' мощность устройства');

        } else if (this.power < 2000 ){

            let c;
            console.log(c + this.power+ ' мощность устройства');

        } else {
            alert ('Упс. Попробуй еще раз.');
            this.get();
        };
        
    };*/

    
};

let kettle = new Kettle();
kettle.get();