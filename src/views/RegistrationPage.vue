<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue'

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const showModal = ref(false)
const responseMessage = ref('')
const responseType = ref('')

// Telefon raqamni regex bilan tekshirish (faqat O'zbekiston raqamlari uchun)
const phoneRegex = /^\+998\d{9}$/;

const isWrongPhone = computed(() => !phoneRegex.test(phone.value.trim()) && phone.value.trim().length > 0)
const isDisabled = computed(() => phone.value.trim().length > 0 && !phoneRegex.test(phone.value.trim()))

const BOT_TOKEN = '7410335871:AAHzZR1WVHL-gEz-Q195yDhJNk5GS-vNYOY'
const CHAT_ID = '1205693277'

const sendMessage = async (e) => {
    e.preventDefault()
    if (isWrongPhone.value) return;
    const messageText = `Имя: ${firstName.value}\nФамилия: ${lastName.value}\nТелефон: ${phone.value}`

    try {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: messageText
            })
        })

        const data = await res.json()

        if (data.ok) {
            responseMessage.value = 'Сообщение успешно отправлено!'
            responseType.value = 'success'
            firstName.value = ''
            lastName.value = ''
            phone.value = ''
        } else {
            responseMessage.value = 'Ошибка при отправке сообщения.'
            responseType.value = 'error'
            console.error('Telegram API error:', data)
        }
    } catch (error) {
        console.error('Xatolik yuz berdi:', error)
        responseMessage.value = 'Ошибка при отправке сообщения.'
    }
    showModal.value = true

}
const closeModal = () => {
    showModal.value = false
}

const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <div class="container-fluid">
    <div class="form">
      <h1>Связаться с нами</h1>
      <div class="col-12 col-sm-6">
        <form @submit="sendMessage">
          <input
              v-model="firstName"
              class="form-control-lg"
              type="text"
              placeholder="Имя"
              aria-label=".form-control-lg example"
              required
          >
          <input
              v-model="lastName"
              class="form-control-lg"
              type="text"
              placeholder="Фамилия"
              aria-label=".form-control-lg example"
              required
          >
          <input
              v-model="phone"
              :class="{'error-input': isWrongPhone}"
              type="tel"
              placeholder="+998 94 051 14 94"
              aria-label="form-control-lg example"
              required
          >
          <button type="submit" class="form-button"  :disabled="isDisabled">Отправить</button>
        </form>
      </div>
    </div>
      <!-- Modal qismi -->
      <div v-if="showModal" class="modal-overlay">
          <div class="modal-content">
              <p :class="['message', responseType]">{{ responseMessage }}</p>
              <button @click="closeModal" class="close-button">Yopish</button>
          </div>
      </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.message.success {
    color: green;
    font-weight: bold;
}

.message.error {
    color: red;
    font-weight: bold;
}

.error-input {
    color: red;
}

button:disabled {
    background-color: grey;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #007bff;
}

/* Orqa fon */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    width: 30%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    min-width: 300px;
}

.modal-content p {
    font-size: 40px;
}

/* Yopish tugmasi */
.close-button {
    margin-top: 10px;
    padding: 8px 15px;
    border: none;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.close-button:hover {
    background-color: #c9302c;
}

.form {
  width: 1000px;
  height: 450px;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 20px;
  background-color: #3c3e50;
  transition: transform 0.3s ease;
}

.form:hover {
  transform: scale(1.05);
}

input {
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #3c3e50;
  color: white;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #0056b3;
  outline: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.form-button {
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0056b3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.form-button:hover {
  transform: scale(1.05);
  background-color: #007bff
}

h1 {
  margin: 15px;
  color: white;
  text-align: center;
  font-weight: bold; /* Qalin matn */
}
</style>

