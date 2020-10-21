<template>
    <div class="experience">
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
        padding-left: 40px;
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
</style>