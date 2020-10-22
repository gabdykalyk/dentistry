<template>
<div class="main">
  <div class="container">
    <header class="header" @scroll="scroll">
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
          <li>
            Записаться на приём
          </li>
        </ul>
      </nav>
      <div class="social">
        <a href="">
          <img src="../assets/images/tg.svg" alt="">
        </a>
        <a href="">
        <img src="../assets/images/inst.svg" alt="">
        </a>
        <a href="">
        <img src="../assets/images/wts.svg" alt="">
        </a>
        <a href="">
        <img src="../assets/images/fb.svg" alt="">
        </a>
      </div>
      <div class="contacts">
        <div class="contacts__item">
          +7 (700) 141-19-62
        </div>
        <div class="contacts__item">
          gabdykalyk@gmail.com
        </div>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      msg: 'hi'
    }
  },
  methods: {
    scroll() {
      if(window.scrollTop()>300){
        ('#elem').show()
        console.log('hello')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  box-shadow: 0px 3px 5px -4px rgba(0,0,0,0.75);
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
  .container {
    font-size: 14px;
    max-width: 1440px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
        ul {
          display: flex;

          li {
            margin-right: 17px;
            border-bottom: 2px solid #ffffff;
            transition: all .2s linear;
            cursor: pointer;
            &:hover {
              border-bottom: 2px solid #000000;
            }
          }
        }

      .social > a {
        margin-right: 10px;
        transition: all .2s linear;
        &:hover {
          opacity: .7;
        }
      }
      .contacts {
        display: flex;
        .contacts__item {
          background-color: #1C263F;
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 5px;
          margin-right: 20px;
          cursor: pointer;
          transition: all .2s linear;
          &:hover {
            background-color: #67778E;
          }
        }
      }
    }
  }
</style>
