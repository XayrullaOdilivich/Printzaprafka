<script>
export default {
    name: "AnimatedBorder",
    props: {
        maxNumber: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            default: 3000,
        },
    },
    data() {
        return {
            currentNumber: 0,
        };
    },
    methods: {
        animateCounter() {
            const startTime = performance.now();
            const increment = this.maxNumber / (this.duration / 16.67);

            const updateNumber = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < this.duration) {
                    this.currentNumber = Math.min(
                        Math.floor((elapsedTime / this.duration) * this.maxNumber),
                        this.maxNumber
                    );
                    requestAnimationFrame(updateNumber);
                } else {
                    this.currentNumber = this.maxNumber;
                }
            };
            requestAnimationFrame(updateNumber);
        },
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateCounter();
                } else {
                    this.currentNumber = 0; // Qayta boshlash uchun
                }
            });
        },
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.5,
        });
        observer.observe(this.$refs.borderBox);
    },
};
</script>

<template>
    <div ref="borderBox">
        <p class="number">{{ currentNumber }}</p>
    </div>
</template>

<style scoped>
.number {
    font-size: 60px;
    font-weight: bold;
    color: white;
    font-family: C059;
    text-align: center;
    margin-top: 25px;
    padding: 0;
}
</style>
