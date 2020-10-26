<template>
  <div class="banner">
    <div class="container">
      <div class="banner__header">
        <div class="banner__menu">
          <img class="banner__logo" src="../assets/images/tooth.svg" alt="">
          <nav>
            <ul>
              <a href="#bio">
                <li>
                  Биография
                </li>
              </a>
              <a href="#features">
                <li>
                  Услуги
                </li>
              </a>
              <a href="#foot">
                <li>
                  Записаться на приём
                </li>
              </a>
              <!-- <li>
                Сертификаты
              </li>
              <li>
                Кейсы
              </li> -->
            </ul>
          </nav>
          <div class="banner__top">
          <div class="banner__name">
            Габдыкалык Орал Арболович
          </div>
          <div class="banner__bottom">
            Врач-стоматолог, терапевт, хирург, ортопед
          </div>
          <div class="banner__contacts--mob">
            <div class="banner__phone">
              <a href="tel:+77001411962" class="phone__mobi">
                +7 (700) 141-19-62
              </a>
               г. Алматы
            </div>
          </div>
        </div>
        </div>
        <div class="banner__contacts">
          <div class="banner__phone">
            <a href="tel:+77001411962">
              +7 (700) 141-19-62
            </a>
          </div>
          <div class="banner__city">
            г. Алматы
          </div>
        </div>
      </div>
      <div class="banner__main">
        <div class="banner__prof">
          Терапия <br>
          Хирургия <br>
          Протезирование
        </div>
        <div class="banner__consult">
          Получить бесплатную консультацию
        </div>
        <div class="banner__image">
          <img src="../assets/images/banner.png" alt="">
        </div>
        <div class="banner__side">
          <div class="banner__name">
            Габдыкалык <br>
            Орал <br>
            Арболович
          </div>
          <div class="banner__bottom">
            Врач-стоматолог, терапевт, <br>
            хирург, ортопед
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
a {
  text-decoration: none;
  color: unset;
}

.banner__contacts--mob {
  display: none;
}

.banner__logo {
  width: 63px;
}
  .banner {
    padding-top: 30px;
    .banner__menu {
      display: flex;
      img {
        margin-right: 20px;
      }
      nav {
        display: flex;
        align-items: center;
      }
      ul {
        display: flex;
        align-items: center;
        li {
            margin-right: 30px;
            border-bottom: 2px solid #ffffff;
            transition: all .2s linear;
            cursor: pointer;
            &:hover {
              border-bottom: 2px solid #000000;
            }
          }
      }
    }

    .banner__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 68px;
    }

    .banner__contacts {
      text-align: right;
    }
  }

  .banner__main {
    background-color: #67778E;
    border-radius: 10px;
    padding-left: 80px;
    padding-top: 53px;
    padding-bottom: 53px;
    position: relative;
    margin-top: 20px;

    .banner__image {
      position: absolute;
      bottom: 0;
      right: 200px;
      img {
        width: 333px;
      }
    }

    .banner__prof {
      font-size: 58px;
      color: #ffffff;
    }

    .banner__consult {
      background-color: #A59385;
      display: inline-block;
      color: #ffffff;
      padding: 15px 15px;
      border-radius: 10px;
      margin-top: 20px;
      cursor: pointer;
      transition: all .2s linear;
      &:hover {
        background-color: #74462E;
      }
    }
  }

  .banner__side {
    position: absolute;
    right: 0;
    top: 57px;
    color: #ffffff;

    .banner__name {
      background-color: #1C263F;
      padding: 8px 21px;
    }

    .banner__bottom {
      font-size: 14px;
      text-align: center;
    }
  }

  .banner__top {
    display: none;
  }

  @media (max-width: 1200px) {
    .banner__main {
      .banner__prof {
        font-size: 45px;
      }

      .banner__image img {
        width: 295px;
      }

      .banner__image {
        right: 170px;
      }
    }
  }

  @media (max-width: 992px) {
    .banner .banner__menu nav {
      display: none;
    }

    .banner__side {
      display: none;
    }

    .banner__top {
      color: #ffffff;
      display: block;
      .banner__name {
        background-color: #1C263F;
        padding: 8px 21px;
        font-size: 14px;
        padding: 10px 12px;
        text-align: center;
      }

    .banner__bottom {
        font-size: 14px;
        text-align: center;
        color: #000000;
      }
    }

    .banner__top .banner__bottom {
      font-size: 11px;
    }

    .banner .banner__menu {
      align-items: center;
    }

    .banner__main .banner__image {
      right: 85px;
    }

    .banner .banner__header {
      padding: 0;
    }
  }

  @media (max-width: 992px) {
    .banner__main .banner__image {
      right: 8px;
    }

    .banner__main .banner__image img {
      width: 252px;
    }

    .banner__main .banner__prof {
      font-size: 35px;
    }
  }

  @media (max-width: 768px) {
    .banner__main .banner__prof {
      font-size: 28px;
    }
    .banner__main .banner__consult {
      font-size: 11px;
    }
    .banner__main .banner__image img {
      width: 218px;
    }
    .banner__main {
      padding-left: 30px;
    }
  }
  @media (max-width: 529px) {
    .banner__phone {
      font-size: 13px;
    }

    .banner__city {
      font-size: 12px;
    }
  }
  @media (max-width: 524px) {
    .banner__main .banner__prof {
      font-size: 24px;
    }
    .banner__main .banner__consult {
      font-size: 9px;
    }
    .banner__main .banner__image img {
      width: 207px;
    }
  }

  @media (max-width: 500px) {
    .banner__contacts {
      display: none;
    }

    .banner__menu {
      margin: 0 auto;
    }
    
    .banner__contacts--mob {
      color: #000000;
      text-align: center;
      display: block;
    }

    .phone__mobi {
      margin-right: 15px;
    }
  }

  @media (max-width: 481px) {
    .banner__main .banner__image img {
      width: 165px;
    }

    .banner__main {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }

  @media (max-width: 437px) {
    .banner__main {
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px; 
    }

    .banner__main .banner__image img {
      width: 140px;
    }
  }

  @media (max-width: 394px) {
    .banner__main .banner__prof {
      font-size: 20px;
    }

    .banner__main .banner__consult {
      padding: 5px 5px;
      border-radius: 5px;
      margin-top: 7px;
    }

    .banner__main .banner__image img {
      width: 104px;
    }
  }
</style>
