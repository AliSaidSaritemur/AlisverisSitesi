using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        private static Dictionary<string, string> userConnections = new Dictionary<string, string>();

        // Kullanıcı bağlantı ID'sini kaydet
        public override Task OnConnectedAsync()
        {
            string userId = Context.GetHttpContext().Request.Query["userId"];
            if (!string.IsNullOrEmpty(userId))
            {
                userConnections[Context.ConnectionId] = userId; // Bağlantıyı kullanıcı ID'si ile eşleştir
            }
            return base.OnConnectedAsync();
        }

        // Kullanıcıya mesaj gönder
        public async Task SendMessageToUser(string userId, string message)
        {
            var connectionId = userConnections.FirstOrDefault(x => x.Value == userId).Key;
            if (connectionId != null)
            {
                await Clients.Client(connectionId).SendAsync("ReceiveMessage", "Admin", message);
            }
        }

        public async Task SendMessageToAdmin(string userId, string message)
        {
            if (string.IsNullOrEmpty(userId) || string.IsNullOrEmpty(message))
            {
                throw new ArgumentException("UserId or Message cannot be null or empty");
            }

            // Adminin bağlantısını buluyoruz
            var adminConnectionId = userConnections.FirstOrDefault(x => x.Value == "Admin").Key;

            if (adminConnectionId == null)
            {
                throw new InvalidOperationException("Admin is not connected.");
            }

            // Admin'e mesaj gönder
            await Clients.Client(adminConnectionId).SendAsync("ReceiveMessage", userId, message);
        }
    }
}
