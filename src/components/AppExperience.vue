<template>
    <div class="experience" id="bio">
        <div class="container">
            <div class="experience__title">
                Моя профессиональная жизнь 
                <div class="experience__subtitle">
                    Путь, который я прошёл
                </div>
            </div>
            <div class="experience__main">
                <div class="experience__item">
                    <div class="experience__year">
                        2014 - 2019
                    </div>
                    <div class="experience__info">
                        Бакалавриат Казахского Национального Медицинского Университета <br>
                        имени С.Д. Асфендиярова
                        <div class="experience__sub">
                            Бакалавр Стоматологии
                        </div>
                    </div>
                    <div class="experience__logo">
                        <img src="../assets/images/asf.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Интернатура Казахского Национального Медицинского Университета <br>
                        имени С.Д. Асфендиярова
                        <div class="experience__sub">
                            Врач-стоматолог общей практики <br>
                            Взрослая и детская
                        </div>
                    </div>
                    <div class="experience__logo">
                        <img src="../assets/images/asf.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Центральная стоматологическая поликлиника города Алматы
                        <div class="experience__sub">
                            Детская хирургия и терапия
                        </div>
                    </div>
                    <div class="experience__logo experience__logo--central">
                        <img src="../assets/images/central.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Стоматологическая клиника профессора Рузуддинова
                        <div class="experience__sub">
                            Врач-стоматолог, терапевт, хирург, ортопед
                        </div>
                    </div>
                    <div class="experience__logo experience__logo--ruz">
                        <img src="../assets/images/ruz.png" alt="">
                    </div>
                </div>
            </div>

            <div class="experience__main--mob">
                <div class="experience__item">
                    <div class="experience__year">
                        2014 - 2019
                    </div>
                    <div class="experience__info">
                        Бакалавриат Казахского Национального Медицинского Университета <br>
                        имени С.Д. Асфендиярова
                        <div class="experience__sub">
                            Бакалавр Стоматологии
                        </div>
                    </div>
                    <div class="experience__logo">
                        <img src="../assets/images/asf.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Интернатура Казахского Национального Медицинского Университета <br>
                        имени С.Д. Асфендиярова
                        <div class="experience__sub">
                            Врач-стоматолог общей практики <br>
                            Взрослая и детская
                        </div>
                    </div>
                    <div class="experience__logo">
                        <img src="../assets/images/asf.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Центральная стоматологическая поликлиника города Алматы
                        <div class="experience__sub">
                            Детская хирургия и терапия
                        </div>
                    </div>
                    <div class="experience__logo experience__logo--central">
                        <img src="../assets/images/central.png" alt="">
                    </div>
                </div>
                <div class="experience__item">
                    <div class="experience__year">
                        2019 - 2020
                    </div>
                    <div class="experience__info">
                        Стоматологическая клиника профессора Рузуддинова
                        <div class="experience__sub">
                            Врач-стоматолог, терапевт, хирург, ортопед
                        </div>
                    </div>
                    <div class="experience__logo experience__logo--ruz">
                        <img src="../assets/images/ruz.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.experience {
    background-color: #F1F1F1;
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 40px;

    .experience__main {
        margin-top: 40px;
    }
    .experience__title {
        text-align: center;
        font-size: 32px;

        .experience__subtitle {
            font-size: 18px;
        }
    }

    .experience__item {
        display: flex;
        position: relative;
        margin-bottom: 47px;

        .experience__year {
            font-weight: 700;
            margin-right: 150px;
        }

        .experience__info {
            font-weight: 700;
            font-size: 20px;
        }

        .experience__sub {
            font-weight: 400;
            font-size: 15px;
        }

        .experience__logo {
            position: absolute;
            top: 0;
            left: 130px;   
            &::before {
                content: '';
                width: 2px;
                height: 50px;
                background-color: #777777;
                display: block;
                position: absolute;
                top: 100%;
                left: 50%;
            } 
        }
    }
    .experience__item:nth-child(2) {
        margin-bottom: 25px;
    }

    .experience__item .experience__logo--central {
        left: 120px;
    }

    .experience__item:nth-child(3) {
        margin-bottom: 60px;
    }

    .experience__item .experience__logo--ruz {
        left: 120px;
        &::before {
            display: none;
        }
    }
}

@media (max-width: 1200px) {
    .experience .experience__item .experience__year {
        white-space: nowrap;
    }

    .experience .experience__item .experience__logo::before {
      height: 125px;
    }
}

@media (max-width: 768px) {
    .experience .container .experience__main {
        display: none;
    }

    .experience__main--mob {
        display: block;
    }

    .experience .experience__item .experience__logo {
        left: 0;
        top: 25px;
    }

    .experience .experience__item .experience__info {
        text-align: center;
        width: 70%;
        margin: 0 auto;
    }

    .experience .experience__item {
        display: block;
    }

    .experience .experience__item .experience__year {
    text-align: center;
    margin: 0 auto;
    }

    .container {
        max-width: 100%;
    }
}

@media (max-width: 665px) {
    .experience .experience__item .experience__info {
        font-size: 15px;
    }
}

@media (max-width: 490px) {
    .experience .experience__logo img {
        width: 70%;
    }

    .experience .experience__item .experience__logo::before {
        left: 34%;
    }
}

@media (max-width: 394px) {
    .experience .experience__title {
      font-size: 25px;
    }
}

@media (max-width: 374px) {
    .experience .experience__item .experience__logo::before {
        height: 175px;
    }
}
</style>