<script>
export default {
    name: "Home_1Component"
}
</script>

<template>
    <div class="container-fluid">
        <a href="/registration" class="img-link">
            <div class="img-container">
                <img src="/assets/Image/photo-1-wbPSPgqC.jpg.svg" alt="img">
                <h3>Заправка монохромные лазерные картриджей</h3>
                <span>Связаться с нами</span>
            </div>
        </a>
        <a href="/registration" class="img-link">
            <div class="img-container">
                <img src="/assets/Image/photo-2-CC4ylwUk.jpg.svg" alt="img">
                <h3>Заправка струйные цветные картриджей</h3>
                <span>Связаться с нами</span>
            </div>
        </a>
        <a href="/registration" class="img-link">
            <div class="img-container">
                <img src="/assets/Image/photo-3-CSNh64D_.jpg.svg" alt="img">
                <h3>Заправка монохромные лазерные картриджей</h3>
                <span>Связаться с нами</span>
            </div>
        </a>
        <a href="/registration" class="img-link">
            <div class="img-container">
                <img src="/assets/Image/photo-4-Cnzzg7kV.png.svg" alt="img">
                <h3>Заправка цветные лазерные картриджей</h3>
                <span>Связаться с нами</span>
            </div>
        </a>
        <a href="/registration" class="img-link">
            <div class="img-container">
                <img src="/assets/Image/photo-5-DCmbfDOy.jpg.svg" alt="img">
                <h3>Продажа картриджей</h3>
                <span>Связаться с нами</span>
            </div>
        </a>
    </div>
</template>

<style scoped>
.container-fluid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 50px 0;
    background-color: white;
}

.img-link {
    text-decoration: none;
}

.img-container {
    width: 250px;
    height: 150px;
    border: 2px solid black;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: all 0.3s ease;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.img-container:hover img {
    transform: scale(1.1) rotate(5deg); /* Rasm va matn qiyshayadi */
}

.img-container h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 40%;
    width: 90%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    opacity: 1;
    transition: opacity 0.3s ease;
    background: #007bff;
}

.img-container span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 10px;
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    opacity: 0; /* Dastlab yashirin */
    transition: opacity 0.3s ease;
    z-index: 2; /* Matn tasvirdan yuqorida bo‘lishi uchun */
}

.img-container:hover h3 {
    opacity: 0; /* Hoverda birinchi matn yashirinadi */
}

.img-container:hover span {
    opacity: 1; /* Hoverda ikkinchi matn ko‘rinadi */
}

.img-container:hover {
    background: rgba(0, 0, 0, 0.2); /* Hoverda ramka ichida fon qo‘shish */
}
</style>
