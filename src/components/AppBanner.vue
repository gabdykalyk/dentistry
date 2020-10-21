<template>
  <div class="banner">
    <div class="container">
      <div class="banner__header">
        <div class="banner__menu">
          <img src="../assets/images/Logo.png" alt="">
          <nav>
            <ul>
              <li>
                Биография
              </li>
              <li>
                Услуги
              </li>
              <li>
                Сертификаты
              </li>
              <li>
                Кейсы
              </li>
            </ul>
          </nav>
        </div>
        <div class="banner__contacts">
          <div class="banner__phone">
            +7 (700) 141-19-60
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
</style>
