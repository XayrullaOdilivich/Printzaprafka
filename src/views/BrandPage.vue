<script>
export default {
    name: "BrandPage"
}
</script>

<template>
    <div class="container-fluid">
        <div class="title">
            Наши Бренды
        </div>
            <div class="line"><hr></div>
        <div class="row">
            <div class="col-4 img">
                <img src="/assets/Image/img_1.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_2.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_3.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_4.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_5.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_6.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_7.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_8.png" alt="img">
            </div>
            <div class="col-4 img">
                <img src="/assets/Image/img_9.png" alt="img">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background-color: white;
    padding: 0 300px;
}
.line {
    background-color: #007bff;
    font-weight: bold;
    height: 3px;
}
.title {
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
}

.row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

.img {
    display: flex;
    justify-content: center;
}

img {
    width: 250px;
    height: auto;
    border: 2px solid #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    margin: 30px;
    padding: 10px;
}

img:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

</style>