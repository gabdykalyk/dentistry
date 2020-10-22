<template>
    <div class="photoes">
        <div class="photoes__items">
            <img class="photoes__first" src="../assets/images/olymp.jpg" alt="">
            <img class="photoes__second" src="../assets/images/treat.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .photoes {
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #F1F1F1;
        text-align: center;
    }

    @media (max-width: 1320px) {
        .photoes__first {
            width: 300px;
        }

        .photoes__second {
            width: 543px;
        }
    }

    @media (max-width: 843px) {
        .photoes__first {
            width: 250px;
        }

        .photoes__second {
            width: 453px;
        }
    }
    @media (max-width: 702px) {
        .photoes__first {
            width: 215px;
        }

        .photoes__second {
            width: 388px;
        }
    }
    @media (max-width: 602px) {
        .photoes__first {
            width: 185px;
        }

        .photoes__second {
            width: 336px;
        }
    }
    @media (max-width: 520px) {
        .photoes__first {
            width: 150px;
        }

        .photoes__second {
            width: 272px;
        }
    }
</style>