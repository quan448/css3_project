/* ==========================================================================
   1. COMMENT OUT STYLE CŨ CỦA LI ELEMENT (Yêu cầu đề bài)
   ========================================================================== */
/* 
li {
    list-style-type: none;
    margin: 10px;
} 
*/


/* ==========================================================================
   2. ACCESSIBILITY (Style cho cái Skip Link tinh tế hơn)
   ========================================================================== */
/* Mặc định ẩn nó đi để không làm xấu giao diện */
.skip-link {
    position: absolute;
    top: -100px;
    left: 10px;
    background: #222;
    color: #fff;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 999;
}

/* Chỉ hiện lên khi người dùng nhấn phím Tab (Focus) */
.skip-link:focus {
    top: 10px;
}


/* ==========================================================================
   3. NAV STYLING (Yêu cầu đổi sang inline-block và width ~80%)
   ========================================================================== */
nav {
    display: inline-block;
    width: 80%;
    background-color: #f4f4f4; /* Màu nền nhẹ để bồ dễ nhìn thấy block */
    padding: 10px;
    vertical-align: middle;
}

/* Descendent selector: Chỉ style cho thẻ img NẰM TRONG nav (width ~10%) */
nav img {
    width: 10%;
    height: auto;
    vertical-align: middle;
}


/* ==========================================================================
   4. GRID CLASS STYLING (2 cột, mỗi cột ~40%, có row-gap)
   ========================================================================== */
.grid {
    display: grid;
    /* Chia 2 cột, mỗi cột khoảng 40% như đề yêu cầu */
    grid-template-columns: 40% 40%; 
    
    /* Dùng space-around hoặc space-between để rải đều 2 cột ra, 
       né cái bẫy bị lệch hẳn sang bên trái của đề bài */
    justify-content: space-around; 
    align-items: start;
    row-gap: 25px; /* Khoảng cách giữa các hàng */
}

/* Descendent selector: Chỉ style cho ảnh NẰM TRONG class .grid lên 100% */
/* (Cái này giúp ảnh ôm trọn 40% của cột, không ảnh hưởng đến ảnh bên .flex) */
.grid img {
    width: 100%;
    height: auto;
}


/* ==========================================================================
   5. FLEX CLASS STYLING
   ========================================================================== */
.flex {
    display: flex;
    /* Bật flex-wrap và justify-content để tùy chỉnh theo screenshot đề bài */
    flex-wrap: wrap;
    justify-content: space-between; 
    gap: 15px;
}

/* Thêm tí màu sắc cho các item trong flex nhìn cho rõ ràng */
.flex-item {
    background-color: #e0e0e0;
    padding: 20px;
    min-width: 150px;
    text-align: center;
}


/* ==========================================================================
   6. COLOR CONTRAST (Né lỗi WAVE Validator)
   ========================================================================== */
/* Đảm bảo màu chữ và màu nền có độ tương phản cao */
body {
    font-family: Arial, sans-serif;
    background-color: #ffffff; /* Nền trắng hẳn */
    color: #1a1a1a;            /* Chữ đen gần như tuyệt đối */
}

a {
    color: #0056b3; /* Màu xanh đậm đạt chuẩn contrast */
}
