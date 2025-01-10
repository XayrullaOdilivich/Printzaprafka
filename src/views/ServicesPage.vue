<script>
export default {
    name: "ServicesPage",
    data() {
        return {
            PrintList: false,
            NotebookList: false,
            ShredrovList: false,
            TermoPrintList: false,
            PlotterovList: false,
            KompyuterList: false,
        };
    },
};
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Наша Услуги</h1>
        </div>
        <hr />
        <div data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom">
            <div class="row">
                <div class="printer">
                    <div class="content">
                        <h3>РЕМОНТ МФУ</h3>
                        <h4>принтеров</h4>
                        <p>Все бренды</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img.png">
                    <button class="btn" @click="PrintList = true">Подробнее</button>
                    <div v-if="PrintList" class="list">
                        <button class="close-btn" @click="PrintList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Ремонт МФУ принтеров всех брендов. Замена картриджей, ремонт печатающей головки, восстановление
                            фотобарабана, настройка сетей.</p>
                    </div>
                </div>
                <div class="notebook">
                    <div class="content">
                        <h3>РЕМОНТ</h3>
                        <h4>Notebook</h4>
                        <p>Ремонт ноутбуков всех марок и моделей</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img_1.png">
                    <button class="btn" @click="NotebookList = true">Подробнее</button>
                    <div v-if="NotebookList" class="list">
                        <button class="close-btn" @click="NotebookList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Профессиональный ремонт ноутбуков. Замена матрицы, клавиатуры, жесткого диска, ремонт материнской
                            платы и многое другое. Быстрая и надежная диагностика.</p>
                    </div>
                </div>
                <div class="shreder">
                    <div class="content">
                        <h3>РЕМОНТ</h3>
                        <h4>Шредеров</h4>
                        <p>Решение проблемы. Ремонт и обслуживание шредеров</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img_2.png">
                    <button class="btn" @click="ShredrovList = true">Подробнее</button>
                    <div v-if="ShredrovList" class="list">
                        <button class="close-btn" @click="ShredrovList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Ремонт и техническое обслуживание шредеров различных производителей. Быстрое восстановление
                            работоспособности вашего оборудования. Замена изношенных деталей.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="termo_print">
                    <div class="content">
                        <h3>РЕМОНТ МФУ</h3>
                        <h4>Термопринт</h4>
                        <p>С гарантией</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img_3.png">
                    <button class="btn" @click="TermoPrintList = true">Подробнее</button>
                    <div v-if="TermoPrintList" class="list">
                        <button class="close-btn" @click="TermoPrintList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Качественный ремонт термопринтеров с гарантией. Замена термоэлемента, роликов, ремонт
                            электроники, настройка и калибровка.</p>
                    </div>
                </div>
                <div class="plotterov">
                    <div class="content">
                        <h3>РЕМОНТ</h3>
                        <h4>Плоттеров</h4>
                        <p>Любая сложность</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img_4.png">
                    <button class="btn" @click="PlotterovList = true">Подробнее</button>
                    <div v-if="PlotterovList" class="list">
                        <button class="close-btn" @click="PlotterovList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Ремонт плоттеров любой сложности. Замена чернильных голов, ремонт механизмов подачи бумаги,
                            восстановление электронных плат.</p>
                    </div>
                </div>
                <div class="kompyuter">
                    <div class="content">
                        <h3>РЕМОНТ</h3>
                        <h4>КОМПЬЮТЕРОВ</h4>
                        <p>Установка Windows программы.</p>
                    </div>
                    <img alt="img" class="hover-image" src="@/ServiceImage/img_5.png">
                    <button class="btn" @click="KompyuterList = true">Подробнее</button>
                    <div v-if="KompyuterList" class="list">
                        <button class="close-btn" @click="KompyuterList = false">X</button>
                        <h3 class="information">Детали</h3>
                        <p>Опытные специалисты устранят любые неполадки вашего компьютера, от программных сбоев до
                            аппаратных поломок. Гарантия на выполненные работы.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
[data-aos="fade-up"] {
    transition-duration: 3s !important;
}
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}

.title {
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

hr {
    border: none;
    border-top: 2px solid gray;
    width: 90%;
    margin: 10px auto;
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 auto;
}

.printer, .notebook, .shreder, .termo_print, .plotterov, .kompyuter {
    height: 250px;
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background-color: transparent;
    margin-top: 20px;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .row {
        flex-wrap: wrap;
        justify-content: center;
    }

    .printer, .notebook, .shreder, .termo_print, .plotterov, .kompyuter {
        flex: 0 0 100%;
        max-width: 100%;
    }
}


.content {
    position: absolute;
    bottom: 60px;
    left: 15px;
    color: white;
}

p {
    margin: 0;
    color: white;
    font-size: 14px;
    line-height: 1.4;
}

h3 {
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: bold;
}

h4 {
    margin: 0;
    color: white;
    font-size: 16px;
    font-weight: bold;
}


.btn {
    position: absolute;
    right: 15px;
    bottom: 20px;
    background-color: #282c34;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 1;
    white-space: nowrap;
}

.btn:hover {
    background: #3c3e50;
    color: white;
}




h3, h4 {
    display: inline;
}

.information {
    text-align: right;
}

/* Tasvir uslubi */
.hover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-image:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Soha */
}

.list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Qora fon */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    z-index: 10;
}

/* Yopish tugmasi */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #3a3e50;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.close-btn:hover {
    color: #f00;
}

.printer {
    width: 512px;
    height: 250px;
}

.notebook, .termo_print, .kompyuter {
    width: 284px;
    height: 250px;
}

.shreder {
    width: 340px;
    height: 250px;
}

.plotterov {
    width: 570px;
    height: 250px;
}
</style>
