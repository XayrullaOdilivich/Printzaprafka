<script>
export default {
    name: "HomeComponent",
    mounted() {
        const border = document.querySelector('.img-border');
        const image = border.querySelector('img');

        // Rasm harakati uchun eventlar
        border.addEventListener('mousemove', (e) => {
            const rect = border.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.8) * 50; // O'ng-chap harakat
            const y = ((e.clientY - rect.top) / rect.height - 0.8) * 50; // Yuqori-past harakat
            image.style.transform = `translate(${x}px, ${y}px)`;
        });

        border.addEventListener('mouseleave', () => {
            image.style.transform = `translate(0, 0)`; // Asl holatiga qaytish
        });
    },
}
</script>

<template>
    <div class="container-fluid">
        <div class="row borders-row">
            <div class="col-6 text-border">
                <div data-aos="fade-right" class="title">Надежность и качество</div>
                <div data-aos="fade-right" class="text">Ремонт и заправка картриджей. Оперативный выезд мастера на дом и в офис!</div>
                <div data-aos="fade-up-left">
                    <p>
                        Предлагаем качественный ремонт принтеров, компьютеров, моноблоков и другой офисной техники, а также
                        заправку картриджей с гарантией.
                    </p>
                </div>
                <div data-aos="fade-right" class="aos-btn">
                    <a class="btn" href="/registration">Заказать ремонт</a>
                </div>
                <div data-aos="fade-left" class="aos-btn">
                    <a class="btn btn_1" href="/about">Узнать подробнее</a>
                </div>
            </div>
            <div class="col-6 img-border">
                <img src="/assets/Image/introimages-BtPiIBjT..svg" alt="">
            </div>
        </div>
        <hr class="line" />
    </div>
</template>

<style scoped>
[data-aos="fade-right"] {
    transition-duration: 3s !important;
}
[data-aos="fade-left"] {
    transition-duration: 3s !important;
}
[data-aos="fade-up-left"] {
    transition-duration: 3s !important;
}
.aos-btn{
    display: inline;
}
.container-fluid {
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 240px); /* Pastdan va tepadan 120px joy */
    padding: 120px 0; /* Umumiy yuqori va pastki bo'sh joy */
    margin: 0;
}

.borders-row {
    display: flex;
    justify-content: center; /* Markazga joylash */
    align-items: center; /* Vertikal o'rta */
    gap: 120px; /* Ikkita border orasidagi masofa */
}

.text-border,
.img-border {
    border: 2px solid #2c3e50;
    border-radius: 10px;
    width: 550px;
    height: auto; /* Ichki kontentga moslashadi */
    min-height: 500px; /* Bir xil minimal balandlik */
    padding: 20px;
    box-sizing: border-box;
}

.title {
    color: cornflowerblue;
    font-size: 30px;
    margin-bottom: 30px; /* Title ostida 30px joy */
}

.text {
    color: white;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 20px; /* Text ostida 20px joy */
    line-height: 1.1; /* Qatorlar orasini yanada yaqinlashtirish */
}

p {
    color: white;
    margin-bottom: 20px; /* P ostida 20px joy */
}

.btn {
    border: 2px solid #1a2e60;
    color: white;
    background-color: #1a2e60;
    padding: 10px 30px;
    text-decoration: none; /* Tagidagi chiziqni o'chirish */
    display: inline-block; /* Border chiqmasligi uchun */
    margin-right: 10px; /* Tugmalar orasida joy */
    transition: background-color 0.3s, color 0.3s; /* Hover uchun animatsiya */
}

.btn:hover {
    background-color: #0056b3;
    color: white;
}

.btn_1 {
    border: 2px solid #007bff;
    color: white;
    background-color: transparent; /* Asosiy fonni o'chirish */
    padding: 10px 30px;
    text-decoration: none; /* Tagidagi chiziqni o'chirish */
    display: inline-block; /* Border chiqmasligi uchun */
    transition: background-color 0.3s, color 0.3s; /* Hover uchun animatsiya */
}

.btn_1:hover {
    background-color: #007bff;
    color: white;
}

.img-border {
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.3);
    position: relative; /* Rasmni joylash uchun */
    display: flex;
    justify-content: center; /* Rasmni gorizontal markazlash */
    align-items: center;
}

.img-border img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Tasvir ramkaga moslashishi */
    transition: transform 0.3s ease-out; /* Animatsiya uchun transform */
}
</style>
