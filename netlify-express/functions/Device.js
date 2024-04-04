const getRandomProvince = require("./provinces");

function generateData(count) {
    const data = [];

    // Lặp để tạo số lượng muốn gen
    for (let i = 0; i < count; i++) {
        const now = new Date();
        const randomApp = Math.random() < 0.5 ? "MRBS" : "Receptionist";
        const randomDeviceId = generateRandomGuid();
        const randomRoom = generateRandomRoom();
        const randomStatus = Math.random() < 0.5 ? "Up" : "Down";

        data.push({
            App: randomApp,
            Office: getRandomProvince(), // Bạn cần thay đổi thành mã logic để lấy tên tỉnh thành ngẫu nhiên ở đây
            Area: getRandomProvince(), // Chưa rõ logic cụ thể, bạn có thể điều chỉnh tùy theo yêu cầu
            DeviceId: randomDeviceId,
            Room: randomRoom,
            Status: randomStatus,
            LastTime: now.toISOString() // Lấy thời gian hiện tại
        });
    }

    return data;
}

// Hàm tạo GUID ngẫu nhiên
function generateRandomGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Hàm tạo Room ngẫu nhiên
function generateRandomRoom() {
    return Math.floor(Math.random() * 100) + 1; // Giả sử Room từ 1 đến 100
}

module.exports = generateData;
