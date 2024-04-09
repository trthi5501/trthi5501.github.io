const getRandomProvince = require("./provinces");
const array = require("./data.json");

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
function getRandomItems(n) {
    var shuffled = array.slice(0), i = array.length, min = i - n, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
function addLastTime(array) {
    // Lặp qua từng mục trong mảng
    array.forEach(function(item) {
        // Tạo một đối tượng Date để lấy thời gian hiện tại
        var currentDate = new Date();
        // Format thời gian hiện tại thành yyyy/MM/dd hh:mm:ss
        var formattedDate = currentDate.getFullYear() + '/' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) + '/' +
            ('0' + currentDate.getDate()).slice(-2) + ' ' +
            ('0' + currentDate.getHours()).slice(-2) + ':' +
            ('0' + currentDate.getMinutes()).slice(-2) + ':' +
            ('0' + currentDate.getSeconds()).slice(-2);
        // Thêm thuộc tính LastTime vào mỗi mục với giá trị là thời gian hiện tại đã được định dạng
        item.LastTime = formattedDate;
    });
    return array;
}

// Hàm tạo GUID ngẫu nhiên
function generateRandomGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}
// Hàm tạo Room ngẫu nhiên
function generateRandomRoom() {
    return Math.floor(Math.random() * 100) + 1; // Giả sử Room từ 1 đến 100
}

module.exports = {generateData,getRandomItems,generateRandomNumber,addLastTime};
