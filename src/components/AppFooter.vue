<template>
    <div class="footer" id="foot">
        <div class="footer__title">
            Обращайтесь по любым <br>
            вопросам!
        </div>
        <div class="footer__photo">
            <img src="../assets/images/round.png" alt="">
        </div>
        <div class="footer__name">
            Орал Арболович
        </div>
        <div class="footer__prof">
            Терапия, хирургия, протезирование
        </div>
        <div class="footer__phone">
            <b>Телефон:</b> +7 (700) 141-19-62
        </div>
        <div class="footer__email">
            <b>Email:</b> gabdykalyk@gmail.com
        </div>
        <div class="social">
            <a href="http://t.me/drgabdykalyk" target="_blank">
                <img src="../assets/images/tg.svg" alt="">
            </a>
            <a href="http://instagram.com/gabdykalyk_" target="_blank">
                <img src="../assets/images/inst.svg" alt="">
            </a>
            <a href="https://wa.me/message/MTB34XOZEIJUK1" target="_blank">
                <img src="../assets/images/wts.svg" alt="">
            </a>
            <a href="https://www.facebook.com/Dr.Gabdykalyk" target="_blank">
                <img src="../assets/images/fb.svg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    .footer__title {
        font-size: 40px;
        margin-bottom: 30px;
    }

    .footer__photo {
        margin-bottom: 20px;
    }

    .footer__name {
        font-size: 20px;
    }
    
    .footer__name,
    .footer__prof,
    .footer__phone {
        margin-bottom: 20px;
    }
    .social {
        margin-top: 40px;
    }
    .social > a {
        margin-right: 10px;
        transition: all .2s linear;
        &:hover {
            opacity: .7;
        }
        }
}


@media (max-width: 394px) {
    .footer .footer__title {
        font-size: 25px;
    }
}
</style>