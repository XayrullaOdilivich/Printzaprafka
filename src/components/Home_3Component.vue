<script>
import AnimatedBorder from "@/components/AnimatedBorder.vue";
export default {
    name: "AnimatedCounter",
    components: {
        AnimatedBorder,
    },
};
</script>

<template>
    <div class="container-fluid">
        <div class="border-container"  data-aos="fade-right" ref="counterContainer">
            <div class="border-box left">
                <AnimatedBorder :maxNumber="6" :duration="2000" />
                <h1>ЛЕТ НА РЫНКЕ</h1>
                <p>Огромный опыт в ремонте и обслуживании принтеров</p>
                <hr />
            </div>
            <div class="border-box center">
                <AnimatedBorder :maxNumber="14000" :duration="2000" />
                <h1>ПРИНТЕРОВ ОТРЕМОНТИРОВАНО</h1>
                <p>Выполнено более 20 000 ремонтов принтеров</p>
                <hr />
            </div>
            <div class="border-box right">
                <AnimatedBorder :maxNumber="2500" :duration="2000" />
                <h1>ОТЗЫВОВ</h1>
                <p>Наши клиенты довольны качеством работы</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<style scoped>
[data-aos="fade-right"] {
    transition-duration: 3s !important;
}

.container-fluid {
    background-image: url("/assets/Image/img_12.png");
    background-size: cover;
    background-position: center;
}

h1 {
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
    color: white;
    font-size: 25px;
    font-family: Avenir;
    margin: 0;
    padding: 0;
}

p {
    color: white;
    text-align: center;
    margin-top: 20px;
}

hr {
    background: white;
    height: 3px;
}

.border-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
}

.border-box {
    flex: none;
    width: 300px;
    border: 0 solid;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    background-color: rgba(100, 100, 100, 0.5);
}

.border-box.center {
    height: 320px;
}

.border-box.left, .border-box.right  {
    position: relative;
    top: 0;
    height: 270px;
}

@media (max-width: 1000px) {
    .border-container{
        flex-direction: column;
        align-items: center;
    }
}

</style>
