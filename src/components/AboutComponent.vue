<script>
export default {
    name: "AboutComponent"
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="content">
                <h1>
                    О нас
                </h1>
                <div class="line">
                    <hr>
                </div>
                <div class="content-title">
                    "TAFAKKUR XIZMAT SAMARASI" MChJ —
                </div>
                <div data-aos="fade-right">
                    <p class="content-text">
                        это динамично развивающаяся компания, которая уже несколько лет успешно работает в сфере
                        обслуживания офисной техники, обеспечивая клиентов надежными и качественными услугами. Мы
                        специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании
                        принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые
                        сложные задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание
                        оборудования.
                    </p>
                </div>
                <h1>
                    Наши ценности и подход
                </h1>
                <div class="line">
                    <hr>
                </div>
                <div data-aos="fade-right">
                    <p class="content-text">
                        Мы понимаем, что исправная работа офисной техники играет важную роль в успешной работе любой
                        компании. Наша цель — обеспечить бесперебойную и качественную работу ваших принтеров и других
                        устройств. Мы гордимся индивидуальным подходом к каждому клиенту и стремимся находить решения,
                        которые полностью удовлетворяют потребности и требования наших партнеров. Придерживаясь высоких
                        стандартов работы, мы используем только проверенные материалы и современные технологии, чтобы
                        гарантировать долговечность и эффективность наших услуг.
                    </p>
                </div>
                <div data-aos="fade-left" class="link">
                    <a href="/about">Узнать больше</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
[data-aos="fade-right"] {
    transition-duration: 3s !important;
}

.container-fluid {
    padding: 0 20px;
    background-color: lightblue;
}

a{
    text-decoration: none;
    border: 2px solid blue;
    border-radius: 10px;
    padding: 15px 30px;
    margin: 50px 40%;
    text-align: center;
    display: block;
    width: 200px;
}

a:hover{
    background-color: blue;
    color: white;
}

h1 {
    font-weight: bold;
    text-align: center;
}

.content {
    border: 2px solid white;
    height: auto;
    width: 1200px;
    border-radius: 10px;
    background-color: white;
    margin: 80px auto;
    padding: 40px 80px;
    box-sizing: border-box;
    transition:  transform 0.8s ease; /* Smooth transition */
}

.content:hover{
    transform: scale(1.1);
}

.content-title {
    display: inline;
    color: #1a2e80;
    font-size: 24px;
    font-weight: bold;
}

.content-text {
    display: inline;
    font-size: 18px;
    line-height: 1.8;
    margin-top: 10px;
}

.line {
    width: 90%;
    background-color: aqua;
    text-align: center;
    margin: 10px auto;
    height: 3px;
}


.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

</style>
