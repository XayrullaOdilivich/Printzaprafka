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
                    <p>Все бренды</p>
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
                    <p>Все бренды</p>
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
                    <p>Все бренды</p>
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
                    <p>Все бренды</p>
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
                    <p>Все бренды</p>
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
</template>

<style scoped>
.title {
    color: white;
    font-weight: bold;
    text-align: center;
}

hr {
    border: none;
    border-top: 2px solid gray;
    width: 90%;
    margin: 10px auto;
}

/* Ramka uslubi */
.printer, .notebook, .shreder, .termo_print, .plotterov, .kompyuter {
    border: 2px solid white;
    border-radius: 10px;
    overflow: hidden; /* Ramkadan tashqaridagi qism ko'rinmasin */
    margin: 10px;
    position: relative;
}

.content {
    position: absolute;
    bottom: 40px; /* Pastdan 40px joy */
    left: 15px; /* Chapdan 15px joy */
}

h3, h4, p {
    margin: 0; /* Ichki bo'shliqni olib tashlash */
    color: white; /* Matn rangini oq qilib belgilash */
}

h3, h4 {
    display: inline;
}

.information {
    text-align: right;
}

.btn:hover {
    background: #3c3e50;
    color: white;
}

.btn {
    position: absolute;
    right: 15px; /* O'ngdan 15px bo'sh joy */
    bottom: 15px; /* Pastdan 15px bo'sh joy */
    background-color: #282c34;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px; /* Tugma uchun yumaloqlik */
    cursor: pointer;
    padding: 10px 20px; /* Tugma ichidagi matn uchun bo'sh joy */
    font-size: 16px; /* Matn o'lchami */
    line-height: 1; /* Matnni vertikal markazlash */
    box-sizing: border-box; /* Padding va borderlarni hisobga olish */
    white-space: nowrap; /* Matnni bir qator ichida ushlab turish */
}

.printer {
    width: 512px;
    height: 250px;
}

.notebook {
    width: 284px;
    height: 250px;
}

.shreder {
    width: 340px;
    height: 250px;
}

.termo_print {
    width: 284px;
    height: 250px;
}

.plotterov {
    width: 570px;
    height: 250px;
}

.kompyuter {
    width: 284px;
    height: 250px;
}

/* Tasvir uslubi */
.hover-image {
    position: absolute; /* Tasvirni ramkaga joylash */
    top: 0;
    left: 0;
    width: 100%; /* Tasvir ramkani to'liq egallaydi */
    height: 100%; /* Tasvir ramkani to'liq egallaydi */
    object-fit: cover; /* Tasvirni ramka ichiga moslashtirish */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover faqat tasvirda ishlashi uchun */
.hover-image:hover {
    transform: scale(1.1); /* Tasvir kattalashadi */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Qo'shimcha list uchun uslublar */
.list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Shaffof qora fon */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    z-index: 10; /* Ramka ichidagi boshqa elementlar ustida */
}

/* Listni yopish tugmasi */
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
    color: #f00; /* Tugmani hover holatida qizil qilish */
}
</style>
