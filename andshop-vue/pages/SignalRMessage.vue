<template>
    <div class="chat-container">
      <h2>Admin ile Sohbet</h2>
  
      <!-- Sohbet Kutusu -->
      <div class="chat-box">
        <div 
          v-for="(msg, index) in messages" 
          :key="index" 
          :class="['chat-message', { 'user-message': msg.sender === 'user', 'admin-message': msg.sender === 'admin' }]">
          <strong>{{ msg.user }}:</strong> {{ msg.text }}
        </div>
      </div>
  
      <!-- Mesaj Giriş Alanı -->
      <div class="chat-input">
        <input v-model="message" placeholder="Mesajınızı yazın..." />
        <button @click="sendMessage">Gönder</button>
      </div>
    </div>
  </template>
  
  <script>
  import connection from "@/chatService";
  
  export default {
    data() {
      return {
        message: "",
        messages: [],
        user: {
          id: null,
          name: "",
        }
      };
    },
    created() {
      this.user.id = localStorage.getItem("userId");
      this.user.name = "Ziyaretçi";
    },
    mounted() {

      connection.on("ReceiveMessage", (user, text) => {
        this.messages.push({ sender: 'admin', user, text });
      });
  
      // Sayfa kapanmadan önce admin'e son mesajı gönder
      window.addEventListener("beforeunload", this.sendFinalMessage);
    },
    beforeDestroy() {
      // Sayfa kapanmadan önce event dinleyicisini kaldırmak iyi bir pratiktir.
      window.removeEventListener("beforeunload", this.sendFinalMessage);
    },
    methods: {
      sendMessage() {
   
        if (this.message.trim() !== "") {
          // Kullanıcıdan mesajı al
          this.messages.push({ sender: 'user', user: this.user.name, text: this.message });
  
          // Admin'e mesaj gönder
          connection.invoke("SendMessageToAdmin", this.user.id, this.message)
            .catch(err => console.error(err));
  
          this.message = "";
        }
      },
  
      sendFinalMessage(event) {
        // Son mesajı göndermek
        const finalMessage = "CHAT ENDED zEgs0tpVwYd1KBvRkcRpmmKSuwvpAg5k";
        connection.invoke("SendMessageToAdmin", this.user.id, finalMessage)
          .catch(err => console.error(err));
  
        // Olayın gerçekleşmesini engellemek için (Sayfa kapanmasını engellemek istemiyorsanız bu satırı kaldırabilirsiniz)
        // event.preventDefault(); 
        // return event.returnValue; // eski tarayıcılar için uyumlu
      }
    }
  };
  </script>
  
  
  <style>
  .chat-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  
  .chat-box {
    height: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    overflow-y: auto;
    background: #f9f9f9;
  }
  
  .chat-message {
    padding: 5px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  
  .chat-message strong {
    display: inline-block;
    margin-right: 5px;
  }
  
  .user-message {
    background-color: #e1f5fe; /* Kullanıcı mesajları için mavi ton */
    text-align: right;
  }
  
  .admin-message {
    background-color: #f1f8e9; /* Admin mesajları için yeşil ton */
    text-align: left;
  }
  
  .chat-input {
    margin-top: 10px;
  }
  
  input {
    width: 70%;
    padding: 5px;
  }
  
  button {
    padding: 5px 10px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  