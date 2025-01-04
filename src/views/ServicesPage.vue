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
    transition-duration: 3s !important; /* "fade-up" animatsiyasi uchun davomiylik */
}
/* Umumiy konteyner uslubi */
.container {
    width: 90%; /* Konteyner kengligi */
    max-width: 1200px; /* Maksimal kenglik */
    margin: 0 auto; /* Markazlash */
    padding: 0 15px; /* Ichki bo'shliq */
    box-sizing: border-box; /* Paddingni hisoblash */
}

/* Sarlavha uslubi */
.title {
    color: white;
    font-weight: bold;
    text-align: center; /* Matnni markazlash */
    margin-bottom: 20px; /* Sarlavha ostidagi bo'sh joy */
}

/* Bo'linish chizig'i */
hr {
    border: none;
    border-top: 2px solid gray;
    width: 90%;
    margin: 10px auto;
}

.row {
    display: flex; /* Yonma-yon joylashuv */
    justify-content: space-between; /* Ramkalar orasidagi teng masofa */
    flex-wrap: wrap; /* Qatorni o'ramli qilish */
    gap: 10px; /* Elementlar orasidagi bo'shliq */
    margin: 0 auto; /* Markazlash */
}

/* Ramkalar kengligi va balandligi */
.printer, .notebook, .shreder, .termo_print, .plotterov, .kompyuter {
    height: 250px; /* Ramkaning bir xil balandligi */
    border: 2px solid white; /* Ramka */
    border-radius: 10px; /* Yumaloqlik */
    overflow: hidden; /* Ortiqcha qismni yashirish */
    position: relative; /* Elementni joylashni aniqlash */
    background-color: transparent;
    margin-top: 20px; /* Tepadan bo'sh joy */
    margin-bottom: 20px;
}

/* Kichik ekranlar uchun media-so'rov */
@media (max-width: 768px) {
    .row {
        flex-wrap: wrap; /* Kichik ekranlarda ustun tartibi */
        justify-content: center; /* Elementlarni markazlash */
    }

    .printer, .notebook, .shreder, .termo_print, .plotterov, .kompyuter {
        flex: 0 0 100%; /* Kichik ekranlarda to'liq kenglik */
        max-width: 100%; /* Maksimal kenglikni moslash */
    }
}


.content {
    position: absolute; /* Matn joylashuvini sozlash */
    bottom: 60px; /* Matn tugmadan yuqoriroq joylashadi */
    left: 15px;
    color: white;
}

p {
    margin: 0;
    color: white;
    font-size: 14px; /* Matnning o‘lchamini kichikroq qilish */
    line-height: 1.4;
}

h3 {
    margin: 0;
    color: white;
    font-size: 18px; /* H3 elementining kattaligini oshirish */
    font-weight: bold; /* Qalinroq matn uchun */
}

h4 {
    margin: 0;
    color: white;
    font-size: 16px; /* H4 elementining kattaligini oshirish */
    font-weight: bold; /* Qalinroq matn uchun */
}


.btn {
    position: absolute;
    right: 15px;
    bottom: 20px; /* Tugmani pastroqqa qaytarish */
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
    transform: scale(1.1); /* Kattalashish */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Soha */
}

/* Qo'shimcha matn bloki uslubi */
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

/* Ramkalar uchun o'lchamlar */
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
