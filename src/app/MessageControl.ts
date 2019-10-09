
/*
    Classe criada para facilitar troca de mensagens entre os componentes
*/ 
export class MessageControl {

    static hasMessage () {
        return localStorage.getItem('messageText') != "" && localStorage.getItem('messageText') != undefined;
    }

    static getMessage(){
        
        let msg = {
            'value' : localStorage.getItem('messageText'),
            'class' : localStorage.getItem('messageClass')
        };

        localStorage.setItem('messageText', '');
        localStorage.setItem('messageClass', '');
        
        return msg;
    }

    static setMessage(msg, _class='alert-success'){
        localStorage.setItem('messageText', msg);
        localStorage.setItem('messageClass', _class);
    }

    static setErrorMessage(msg){
        MessageControl.setMessage(msg, 'alert-danger');
    }

}