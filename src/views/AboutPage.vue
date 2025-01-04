<script>
export default {
    name: "AboutPage"
}
</script>

<template>
<div class="container-fluid">
    <h1>О наша компания</h1>
    <hr>
    <div class="row">
        <div class="content">

        </div>
    </div>
    <div class="row">
        <div class="content_1">
        </div>
        <div class="content_1"></div>
        <div class="content_1"></div>
    </div>
</div>
</template>

<style scoped>
h1 {
    color: white;
    text-align: center;
}

hr {
    border: none;
    border-top: 2px solid gray;
    margin: 10px auto;
    max-width: 1400px;
}

.container-fluid {
    padding: 0 20px; /* Yon taraflarga 20px bo'shliq qo'shish */
}

.content {
    border: 2px solid white;
    height: 300px;
    width: 1200px; /* Aniq kenglik */
    border-radius: 10px;
    background-color: white;
    margin: 40px auto; /* Yuqori-past va yonlardan markazlash */
}

.row {
    display: flex;
    justify-content: center; /* Elementlarni markazlash */
    flex-wrap: wrap; /* Joy yetmasa, elementlar pastga tushadi */
    gap: 20px; /* Elementlar orasidagi masofa */
}

.content_1 {
    border: 2px solid white;
    height: 130px;
    width: 450px; /* Aniq kenglik */
    border-radius: 10px;
    background-color: white;
    margin: 10px; /* Ramkalar orasidagi masofani aniq ko'rsatish */
}

</style>