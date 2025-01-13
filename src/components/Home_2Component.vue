<script>
export default {
    name: "Home_2Component"
}
</script>

<template>
    <div class="container-fluid">
        <div class="img">
            <img src="/assets/Image/img_10.png" class="img-1" alt="img">
        </div>
        <h1>
            Ремонт Plotter принтеров
            с гарантией качества!
        </h1>
        <p>
            Мы обеспечим надежный ремонт и обслуживание вашего Plotter принтера, чтобы он снова работал как новый.
        </p>
        <div class="img_1">
            <img src="/assets/Image/img_11.png" alt="img">
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background-color: #2c3e50;
    position: relative; /* Konteyner elementlarning pozitsiyasini boshqaradi */
    width: 100%;
    height: 900px;
}

h1{
    position: absolute;
    top: 50%; /* Vertikal markaz */
    left: 50%; /* Gorizontal markaz */
    transform: translate(-50%, -50%); /* Markaziy nuqtani to'g'rilash */
    color: white;
    font-size: 75px;
    font-weight: bold;
    z-index: 3; /* Matnni yuqoriga olib chiqish */
    text-align: center;
}

p{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%); /* Markaziy nuqtani to'g'rilash */
    color: white;
    font-size: 20px;
    white-space: nowrap; /* Matnni bir qatorda ushlab turish */
    font-weight: bold;
    z-index: 3; /* Matnni yuqoriga olib chiqish */
}

.img-1{
    filter: blur(15px); /* Xiralik darajasi */
}

.img  img{
    margin-top: 100px;
    width: 1200px; /* Birinchi tasvirni kattalashtirish */
    height: 600px;
}

.img_1 img {
    width: 900px; /* Ikkinchi tasvirning o'lchamini saqlash */
    height: 700px;
    position: absolute; /* Ikkinchi rasmni joylashtirish */
    top: 40%; /* Ekranning yarmida */
    right: 50px; /* O'ngdan masofa */
    transform: translateY(-50%); /* Vertikal markazlashtirish */
    z-index: 2; /* Birinchi rasm ustida ko'rinadi */
}
</style>
