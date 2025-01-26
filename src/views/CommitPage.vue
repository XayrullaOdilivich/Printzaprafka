<script>
import '@splidejs/vue-splide/css';
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
    name: "CommitPage",
    components: {Splide, SplideSlide},
    data() {
        return {
            perPage: 3,
        };
    },
    methods: {
        prevSlide() {
            this.$refs.splide.go('<');
        },
        nextSlide() {
            this.$refs.splide.go('>');
        },
        updatePerPage() {
            const width = window.innerWidth;
            if (width < 768) {
                this.perPage = 1;
            } else if (width < 1200) {
                this.perPage = 2;
            } else {
                this.perPage = 3;
            }
        },
    },
    mounted() {
        this.updatePerPage();
        window.addEventListener('resize', this.updatePerPage);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updatePerPage)
    },
};
</script>


<template>
    <div class="container-fluid">
        <div class="container" data-aos="fade-right">
            <div class="title">Отзыв клиентов</div>
            <Splide
                ref="splide"
                :options="{
                  type: 'loop',
                  autoplay: true,
                  perPage: perPage,
                  perMove: 1,
                  gap: '1rem',
                  arrows: false
                }"
            >
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img.png">
                            <div class="name">Достон Ерназаров</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            После того как мой принтер начал давать сбои, я обратился в эту компанию. Принтер починили
                            быстро и
                            качественно, теперь он работает как новый. Очень доволен обслуживанием, буду рекомендовать
                            всем!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_1.png">
                            <div class="name">Дилноза Назарова</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            Заправка картриджа в этой компании — это всегда быстро и без проблем. Мой принтер работает
                            отлично, а заправка картриджа в разы дешевле, чем покупка нового. Спасибо за отличный
                            сервис!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_2.png">
                            <div class="name">Шухрат Абдуманнопов</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            Мой плоттер перестал работать должным образом, и я обратился сюда. Специалисты быстро нашли
                            причину и починили его. Теперь он печатает идеально, а я доволен качеством работы!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_3.png">
                            <div class="name">Сабина Баратова</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            Мой офисный принтер перестал печатать качественно, и я решила обратиться за помощью. Сервис
                            был
                            на высшем уровне, принтер починили оперативно, и теперь он работает без сбоев. Очень
                            довольна
                            результатом!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_4.png">
                            <div class="name">Хуршид Эргашов</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            Компания отлично заправила мой картридж, и теперь мой принтер работает как новый! Услуга
                            быстрая, качественная и доступная. Очень доволен качеством и обслуживанием!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_5.png">
                            <div class="name">Ирина Андреевна</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            Заправка картриджей здесь — это удобно и выгодно! Мой принтер после заправки стал работать
                            лучше, а качество печати заметно улучшилось. Спасибо за быстрый и качественный сервис!
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="content">
                        <div class="content-header">
                            <img alt="img" src="/assets/avatar/img_6.png">
                            <div class="name">Темур Жавлонов</div>
                        </div>
                        <div class="line">
                            <hr>
                        </div>
                        <p>
                            С помощью этой компании мой принтер снова работает как новый! Ребята не только починили
                            технику,
                            но и дали полезные советы по обслуживанию. Очень рад, что обратился сюда!
                        </p>
                    </div>
                </SplideSlide>
            </Splide>
            <div class="custom-navigation">
                <button @click="prevSlide"><-</button>
                <button @click="nextSlide">-></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
[data-aos="fade-right"] {
    transition-duration: 3s !important;
}

.container-fluid {
    background-color: #2c3e50;
}

.title {
    color: white;
    text-align: center;
    font-size: 40px;
    margin: 30px;
}

.custom-navigation {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.custom-navigation button {
    margin: 0 5px;
    font-size: 30px;
    cursor: pointer;
    background: none;
    color: white;
    border: none;
}

.content {
    border: 2px solid #3c3e50;
    width: 366px;
    height: 294px;
    border-radius: 10px;
    padding: 20px;
    background: radial-gradient(circle, #2c3e50 10%, #404247);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.9s ease, box-shadow 0.3s ease, background 0.5s ease;
}

.content::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 70px;
    background: linear-gradient(to bottom, black 10%, #2c3e50);
    border-radius: 70px 70px 0 0;
    z-index: 1;
}

.content:hover::before {
    background: linear-gradient(to bottom, black 10%, #1a2e80);
}

p {
    color: white;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 10px;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
}

.content:hover p {
    transform: scale(1.05);
}


.content:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    background: radial-gradient(circle, #1a2e80 10%, #404247);
}

.content-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid deeppink;
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.content:hover img {
    border-color: blue;
    transform: scale(1.1);
}

.name {
    font-size: 25px;
    font-weight: bold;
    color: white;
    transition: color 0.3s ease;
}

.content:hover .name {
    color: deeppink;
}

.line {
    background-color: deeppink;
    height: 3px;
    width: 95%;
    margin: 15px 0;
}

@media (max-width: 992px) {
    .content {
        width: 90%;
        height: 90%;
    }
}
</style>
