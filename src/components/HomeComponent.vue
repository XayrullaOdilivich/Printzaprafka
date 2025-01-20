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
                    <a class="btn" id="btn-1" href="/registration">Заказать ремонт</a>
                </div>
                <div data-aos="fade-left" class="aos-btn">
                    <a class="btn" id="btn-2" href="/about">Узнать подробнее</a>
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
    min-height: calc(100vh - 240px);
    padding: 120px 0;
    margin: 0;
}

.borders-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
}

.text-border,
.img-border {
    border: 2px solid #2c3e50;
    border-radius: 10px;
    width: 550px;
    height: 550px;
    padding: 20px;
    box-sizing: border-box;
}

.title {
    color: cornflowerblue;
    font-size: 30px;
    margin-bottom: 30px;
}

.text {
    color: white;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 20px;
    line-height: 1.1;
}

p {
    color: white;
    margin-bottom: 20px;
}

#btn-1 {
    border: 2px solid #1a2e60;
    color: white;
    background-color: #1a2e60;
    padding: 10px 30px;
    text-decoration: none;
    display: inline-block;
    margin-right: 10px;
    transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
    color: white;
}

#btn-2 {
    border: 2px solid #007bff;
    color: white;
    background-color: transparent;
    padding: 10px 30px;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s, color 0.3s;
}

#btn-2:hover {
    background-color: #007bff;
    color: white;
}

.img-border {
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-border img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease-out;
}

@media (max-width: 580px) {
    .aos-btn{
        display: inline;
    }

    .title {
        color: cornflowerblue;
        font-size: 20px;
        margin-bottom: 25px;
        margin-left: 20%
    }

    .text {
        color: white;
        font-weight: bold;
        font-size: 30px;
        margin: 20px 20%;
        line-height: 1.1;
    }

    p {
        color: white;
        margin: 0 20%;
    }

    #btn-1 {
        border: 2px solid #1a2e60;
        color: white;
        background-color: #1a2e60;
        padding: 5px 10px;
        text-decoration: none;
        display: inline-block;
        margin-left: 20%;
        margin-top: 10px;
        transition: background-color 0.3s, color 0.3s;
    }

    #btn-2 {
        border: 2px solid #007bff;
        color: white;
        background-color: transparent;
        padding: 5px 10px;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        transition: background-color 0.3s, color 0.3s;
    }

    .img-border {
        width: 340px;
        height: 340px;
    }
}
</style>
