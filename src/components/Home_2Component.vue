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
    position: relative;
    width: 100%;
    height: 900px;
}

h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 75px;
    font-weight: bold;
    z-index: 3;
    text-align: center;
}

p{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    white-space: nowrap;
    font-weight: bold;
    margin-top: 5%;
    z-index: 3;
}

.img-1{
    filter: blur(15px);
}

.img  img{
    margin-top: 100px;
    width: 70%;
    height: 40%;
}

.img_1 img {
    width: 50%;
    height: 70%;
    position: absolute;
    top: 40%;
    right: 50px;
    transform: translateY(-50%);
    z-index: 2;
}

@media (max-width: 1200px) {
    h1{
        font-size: 50px;
    }
    p {
        white-space: normal;
        margin-top: 10%  !important;
    }
}
@media (max-width: 768px) {
    h1{
        font-size: 40px;
    }

    p {
        white-space: normal;
        margin-top: 10%  !important;
    }
}
@media (max-width: 576px) {

    .img_1 img {
        height: 50%;
        margin-top: -30% !important;
    }
    h1 {
        font-size: 30px;
        margin-top: -60%  !important;
        margin-right: -40% !important;
    }

    p {
       font-size: 15px;
        margin-top: -60%  !important;
        margin-right: -40% !important;
    }
}
</style>
