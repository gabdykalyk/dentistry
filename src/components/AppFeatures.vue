<template>
    <div class="features" id="features">
        <div class="container">
            <div class="features__title">
                Почему стоит обратиться ко мне
            </div>
            <div class="features__row">
                <div class="features__item">
                    <div class="features__info">
                        <div class="features__name">
                            Консультирую бесплатно
                        </div>
                        <div class="features__text">
                            Консультация включает в себя : полный осмотр <br>
                            полости рта, составление плана лечения, <br>
                            рекомендации. <br>
                            При себе необходимо иметь Ортопантомограмму
                        </div>
                    </div>
                    <div class="features__logo">
                        <img src="../assets/images/phonen.svg" alt="">
                    </div>
                </div>
                <div class="features__item">
                    <div class="features__info">
                        <div class="features__name">
                            Только качественные материалы
                        </div>
                        <div class="features__text">
                            В своей работе я использую только самые <br>
                            современные материалы и самые продвинутые <br>
                            методики лечения доказавшие свою эффективность
                        </div>
                    </div>
                    <div class="features__logo">
                        <img class="image__right" src="../assets/images/check.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="features__row">
                <div class="features__item">
                    <div class="features__info">
                        <div class="features__name">
                            Вкладываюсь в развитие
                        </div>
                        <div class="features__text">
                            30% своего дохода вкладываю в <br>
                            профессиональное развитие. Книги, курсы, <br> 
                            материалы и инструменты
                        </div>
                    </div>
                    <div class="features__logo">
                        <img src="../assets/images/book.svg" alt="">
                    </div>
                </div>
                <div class="features__item">
                    <div class="features__info">
                        <div class="features__name">
                            Только качественные материалы
                        </div>
                        <div class="features__text">
                            В своей работе я использую только самые <br>
                            современные материалы и самые продвинутые <br>
                            методики лечения доказавшие свою эффективность
                        </div>
                    </div>
                    <div class="features__logo">
                        <img class="image__right" src="../assets/images/24.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="features__row--mob">
                <div class="features__item features__item--mob">
                    <div class="features__info features__info--mob">
                        <div class="features__name">
                            Консультирую бесплатно
                        </div>
                        <div class="features__text">
                            Консультация включает в себя : полный осмотр <br>
                            полости рта, составление плана лечения, <br>
                            рекомендации.
                            При себе необходимо <br>
                            иметь Ортопантомограмму
                        </div>
                    </div>
                    <div class="features__logo features__logo--mob">
                        <img src="../assets/images/phonen.svg" alt="">
                    </div>
                </div>
                <div class="features__item features__item--mob">
                    <div class="features__info features__info--mob">
                        <div class="features__name">
                            Только качественные материалы
                        </div>
                        <div class="features__text">
                            В своей работе я использую только самые <br>
                            современные материалы и самые продвинутые <br>
                            методики лечения доказавшие свою эффективность
                        </div>
                    </div>
                    <div class="features__logo features__logo--mob">
                        <img class="image__right" src="../assets/images/check.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="features__row--mob">
                <div class="features__item features__item--mob">
                    <div class="features__info features__info--mob">
                        <div class="features__name">
                            Вкладываюсь в развитие
                        </div>
                        <div class="features__text">
                            30% своего дохода вкладываю в <br>
                            профессиональное развитие. Книги, курсы, <br> 
                            материалы и инструменты
                        </div>
                    </div>
                    <div class="features__logo features__logo--mob">
                        <img src="../assets/images/book.svg" alt="">
                    </div>
                </div>
                <div class="features__item features__item--mob">
                    <div class="features__info features__info--mob">
                        <div class="features__name">
                            Только качественные материалы
                        </div>
                        <div class="features__text">
                            В своей работе я использую только самые <br>
                            современные материалы и самые продвинутые <br>
                            методики лечения доказавшие свою эффективность
                        </div>
                    </div>
                    <div class="features__logo features__logo--mob">
                        <img class="image__right" src="../assets/images/24.svg" alt="">
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
.features__row--mob {
    display: none;
}

.features {
    padding-top: 50px;
    padding-bottom: 50px;
    .features__title {
        text-align: center;
        font-size: 30px;
        margin-bottom: 50px;
    }

    .features__row {
        display: flex;
        margin-bottom: 50px;
    }

    .features__item {
        display: flex;
        justify-content: space-between;
        width: 50%;

        img {
            margin-right: 40px;
        }

        .image__right{
            margin-right: 20px;
        }

        .features__name {
            font-size: 23px;
        }

        .features__text {
            color: #757575;
            font-size: 14px;
            margin-top: 10px;
        }
    }
}

@media (max-width: 992px) {
    .features .features__row {
        flex-wrap: wrap;
        margin: 0;
    }

    .features .features__item {
        width: 85%;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .features .features__item img {
        margin: 0;
    }

    .features .features__item .image__right {
        margin: 0;
    }
}

@media (max-width: 992px) {
    .features .features__row {
        display: none;
    }

    .features__row--mob {
        display: block;
    }

    .features__item--mob {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }

    .features__info--mob {
        margin: 0 auto;
        width: 100%;
    }

    .features__logo--mob {
        margin: 30px auto;
    }
}
</style>