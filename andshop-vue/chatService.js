import * as signalR from "@microsoft/signalr";

// Vue.js tarafından oluşturulan userId'yi URL'ye ekliyoruz
localStorage.setItem("userId", 'user-' + Math.random().toString(30).substr(2, 9));
const userId = localStorage.getItem("userId");  // Eğer userId yoksa, yeni bir id oluşturuyoruz
localStorage.setItem("userId", userId);  // userId'yi tarayıcıda saklıyoruz

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`https://localhost:7214/chathub?userId=${userId}`)  // userId'yi query parametresi olarak ekliyoruz
    .withAutomaticReconnect()
    .build();

connection.start()
    .then(() => {
        console.log("SignalR bağlantısı kuruldu");
    })
    .catch(err => {
        console.error("Bağlantı hatası:", err);
    });

connection.onclose((error) => {
    console.error("SignalR bağlantısı kapandı:", error);
});

connection.onreconnecting((error) => {
    console.log("SignalR yeniden bağlanıyor...");
});

connection.onreconnected(() => {
    console.log("SignalR yeniden bağlandı");
});

export default connection;
