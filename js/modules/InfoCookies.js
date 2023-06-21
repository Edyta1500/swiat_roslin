import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies {

    constructor() {
        super();

        this.InfoCookie = 'Informujemy, że korzystamy z informacji zapisanych w plikach cookies na urządzeniach końcowych użytkowników. Pliki te można kontrolować za pomocą ustawień przeglądarki internetowej. Dalsze korzystanie z naszego serwisu oznacza, iż akceptujesz pliki cookies.';

        this.textClose = '<a href="#">X<a/>';

        this.textColor = '#0a0a49';

        this.infoPlace = document.querySelector('.cookies');

        if(!this.getCookie('Accept')) {
            this.showInfo();
        }

        this.setInfoProperties();


    }
    showInfo() {
        this.infoPlace.style.display= 'block';
        this.infoPlace.style.transform= 'translateX(0)' 
    }
    hideInfo() {
        this.infoPlace.style.transform= 'translateX(-100%)'; 
    }


    setInfoProperties() {
        const text = document.querySelector('.cookies__text');
        text.innerHTML = this.InfoCookie;
        text.style.color = this.textColor;
        const close = document.querySelector('.cookies__close');
        close.innerHTML = this.textClose;
    }

    setCookie() {
        super.setCookie({
            name: 'Accept',
            value: 'yes',
            days: 90
        });
        this.hideInfo();
    }
}