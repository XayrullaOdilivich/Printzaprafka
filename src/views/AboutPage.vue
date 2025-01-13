<script>
export default {
    name: "AboutPage"
}
</script>

<template>
    <div class="container-fluid">
        <h1>О наша компания</h1>
        <hr>
        <div class="row">
            <div class="content">
                <div class="line"><hr></div>
                <div class="content-title">
                    "TAFAKKUR XIZMAT SAMARASI" MChJ —
                </div>
                <p class="content-text">
                    это динамично развивающаяся компания, которая уже несколько лет успешно работает в сфере
                    обслуживания офисной техники, обеспечивая клиентов надежными и качественными услугами. Мы
                    специализируемся на заправке и восстановлении картриджей, ремонте и техническом обслуживании
                    принтеров и другой оргтехники. Наша команда состоит из опытных специалистов, готовых решать самые
                    сложные задачи и помогать нашим клиентам оптимизировать свои затраты на печать и обслуживание
                    оборудования.
                </p>
                <div class="line"><hr></div>
            </div>
        </div>
        <div class="row">
            <div class="content_1">
                <div class="content_1-title">
                    Профессиональная команда
                </div>
                <p class="content_1-text">
                    Мы гордимся нашей командой, которая всегда готова прийти на помощь.
                </p>
            </div>
            <div class="content_2">
                <div class="content_2-title">
                    Современные технологии
                </div>
                <p class="content_2-text">
                    Мы используем только самые современные решения для обеспечения высокого качества.
                </p>
            </div>
            <div class="content_3">
                <div class="content_3-title">
                    Надежность и качество
                </div>
                <p class="content_3-text">
                    Наша цель — обеспечить ваших клиентов надежной техникой с максимальным сроком службы
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: white;
    text-align: center;
}

hr {
    border: none;
    border-top: 2px solid gray;
    margin: 10px auto;
    max-width: 1400px;
}

.container-fluid {
    padding: 0 20px;
    background-color: #2c3e50;
}

.content {
    border: 2px solid white;
    height: auto;
    width: 1200px;
    border-radius: 10px;
    background-color: white;
    margin: 40px auto;
    padding: 40px;
    box-sizing: border-box;
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
}


.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.content_1, .content_2, .content_3 {
    border: 2px solid white;
    height: 130px;
    width: 450px;
    border-radius: 10px;
    background-color: white;
    margin: 10px;
    text-align: center;
    padding: 20px;
}

.content_1-title{
    text-align: center;
    color: #1a2e80;
    font-weight: bold;
    font-size: 20px;
}

.content_2-title{
    text-align: center;
    color: green;
    font-weight: bold;
    font-size: 20px;
}

.content_3-title{
    text-align: center;
    color: coral;
    font-weight: bold;
    font-size: 20px;
}
</style>
