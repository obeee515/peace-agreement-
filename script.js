// تحديث تاريخ الاتفاقية تلقائيًا
document.getElementById("date").innerText = new Date().toLocaleDateString("ar-EG");

// تغيير لون الخلفية عند الضغط على الزر
function changeBackground() {
    let colors = ["#001F3F", "#FF851B", "#2ECC40", "#FF4136", "#0074D9"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

// إظهار رسالة ترحيب عند دخول الموقع
function welcomeMessage() {
    alert("مرحبًا بك في موقع مملكة أوبي!");
}