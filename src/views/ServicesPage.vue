<script>
export default {
    name: "ServicesPage",
    data() {
        return {
            showList: false, // Qo'shimcha listni boshqarish
        };
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="printer">
                <div class="content">
                    <h3>РЕМОНТ МФУ</h3>
                    <h4>принтеров</h4>
                    <p>Все бренды</p>
                </div>
                <img src="@/ServiceImage/img.png" alt="img" class="hover-image">
                <button class="btn" @click="showList = true">Подробнее</button>
                <!-- Faqat printer ramkasi ichida qo'shimcha list -->
                <div v-if="showList" class="list">
                    <button class="close-btn" @click="showList = false">X</button>
                    <h3>Дополнительная информация</h3>
                    <p>Здесь будет текст описания или дополнительная информация о принтере.</p>
                </div>
            </div>
            <div class="notebook">
                <img src="@/ServiceImage/img_1.png" alt="img" class="hover-image">
            </div>
            <div class="shreder">
                <img src="@/ServiceImage/img_2.png" alt="img" class="hover-image">
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ramka uslubi */
.printer, .notebook, .shreder {
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
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.close-btn:hover {
    color: #f00; /* Tugmani hover holatida qizil qilish */
}
</style>
