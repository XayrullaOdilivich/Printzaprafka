<script>
import AOS from 'aos'; // AOS kutubxonasini import qilamiz
import 'aos/dist/aos.css'; // AOS uchun CSSni import qilamiz

export default {
    name: "SalesBrandPage",
    mounted() {
        // AOSni ishga tushuramiz va sozlashlar kiritamiz
        AOS.init({
            duration: 2000, // Animatsiya davomiyligi
            easing: 'ease-out', // Silliq boshlanish va to'xtash
            once: true, // Animatsiya faqat bir marta bo'lishi kerak
        });
    },
    data() {
        return {
            isExpanded: false,
            brands: [
                "Canon", "Epson", "HP", "KYOCERA", "OKI", "Samsung", "Xerox", "Pantum", "Ricoh"
            ],
            descriptions: [
                "Мы уже более 10 лет предоставляем услуги по ремонту принтеров и заправке картриджей Canon...",
                "Специалисты нашей компании имеют большой опыт в обслуживании и ремонте принтеров Epson...",
                "Мы являемся экспертами в ремонте принтеров и заправке картриджей HP...",
                "Специализируясь на ремонте принтеров KYOCERA, мы гарантируем качественное и профессиональное обслуживание...",
                "Уже много лет мы работаем с принтерами OKI, предоставляя качественные услуги...",
                "Мы успешно работаем с принтерами Samsung, предлагая полный спектр услуг...",
                "Более десяти лет мы работаем с принтерами Xerox, предоставляя услуги по их ремонту...",
                "Мы также предлагаем услуги по ремонту и заправке картриджей принтеров Pantum...",
                "Наша компания успешно обслуживает принтеры Ricoh, выполняя полную диагностику и ремонт..."
            ]
        };
    },
    computed: {
        visibleBrands() {
            return this.isExpanded ? this.brands : this.brands.slice(0, 4);
        },
        formattedDescriptions() {
            return this.descriptions.map((description, index) => {
                const brand = this.brands[index];
                const regex = new RegExp(brand, 'g'); // Brendlarni topish
                return description.replace(regex, `<span class="highlight">${brand}</span>`);
            });
        }
    },
    methods: {
        toggleExpand() {
            this.isExpanded = !this.isExpanded;
        }
    }
};
</script>

<template>
    <div class="container-fluid">
        <h1>Продажа и Бренды</h1>
        <hr/>
        <div
            class="canon"
            v-for="(brand, index) in visibleBrands"
            :key="index"
            data-aos="fade-right"
        >
            <div class="row">
                <div class="col-12 img-container">
                    <div class="img">
                    <img :alt="'Image ' + (index + 1)" :src="`/assets/Image/img_${index + 1}.png`"/>
                    </div>
                </div>
                <div class="col-12 col-md-6 content-container">
                    <div class="title">
                        Партнерство с <span class="highlight">{{ brand }}</span>
                    </div>
                    <p v-html="formattedDescriptions[index]"></p>
                </div>
            </div>
        </div>
        <button @click="toggleExpand" class="toggle-btn">
            {{ isExpanded ? "Скрыть элементы" : "Показать все" }}
        </button>
    </div>
</template>
<style scoped>
.container-fluid {
    background-color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

h1 {
    text-align: center;
    color: white;
}

hr {
    border: none;
    border-top: 2px solid gray;
    width: 90%;
    margin: 10px auto;
}

.canon {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: 860px;
    margin: 10px 0;
    background: linear-gradient(270deg, #282c34, #1a2e60);
    padding: 10px;
    position: relative;
    box-sizing: border-box;
}

.canon > .row {
    display: flex;
    width: 100%; /* To'liq kenglik */
    border-radius: 10px;
    background: #282828;
    margin: 0;
    padding: 0;
}

.img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(270deg, grey, #282828 100%);
    width: 420px;
    height: 250px;
    margin: 0;
    border-radius: 10px;
}

.content-container {
    height: 250px;
    width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    background: #282c34;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    background-color: #3c3e50;
    padding: 5px;
}

.img-container img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-container img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    color: white;
    font-size: 14px;
    line-height: 1.6;
}

.highlight {
    color: red;
    font-weight: bold;
}

.toggle-btn {
    margin: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #1a2e60;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-btn:hover {
    background-color: #282c34;
}

@media (max-width: 992px) {
    .canon {
        width: 80%;
    }
    .img-container,
    .content-container {
        width: 100%;
    }
}
</style>

