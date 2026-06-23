/* ==========================================================================
   1. COMMENT OUT STYLE CŨ CỦA LI ELEMENT
   ========================================================================== */
/* li { list-style-type: none; } 
*/


/* ==========================================================================
   2. ACCESSIBILITY (Skip Link)
   ========================================================================== */
.skip-link {
    position: absolute;
    top: -100px;
    left: 10px;
    background: #111;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    z-index: 999;
}
.skip-link:focus {
    top: 10px;
}


/* ==========================================================================
   3. NAV STYLING (Yêu cầu: inline-block và width ~80%)
   ========================================================================== */
nav {
    display: inline-block;
    width: 80%;
    background-color: #f0f0f0; 
    padding: 15px;
    vertical-align: middle;
}

/* Thay thế selector "nav img" bằng descendent selector mới */
/* Định dạng cái LOGO GIẢ có width đúng 10% như đề yêu cầu */
nav .mock-img-logo {
    display: inline-block;
    width: 10%; /* Đúng 10% nha ní */
    background-color: #0056b3; /* Màu xanh đạt chuẩn contrast */
    color: white;
    text-align: center;
    padding: 5px 0;
    font-weight: bold;
    font-size: 14px;
    vertical-align: middle;
    margin-right: 15px;
}

nav a {
    color: #0056b3;
    text-decoration: none;
    margin-right: 10px;
}


/* ==========================================================================
   4. GRID CLASS STYLING (2 cột, mỗi cột ~40%)
   ========================================================================== */
.grid {
    display: grid;
    grid-template-columns: 40% 40%; /* 2 cột mỗi cột 40% */
    justify-content: space-between; 
    align-items: start;
    row-gap: 25px;
}

/* Thay thế selector ".grid img" cũ bằng descendent selector mới */
/* Chỉnh cái ẢNH GIẢ TRONG GRID có width 100% để nó khít với cột 40% */
.grid .mock-img {
    width: 100%; /* Đúng 100% nha ní */
    height: 150px; /* Chiều cao cố định nhìn cho giống cái ảnh */
    background-color: #555; /* Màu xám đậm để đạt tương phản tốt với chữ trắng */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}


/* ==========================================================================
   5. FLEX CLASS STYLING
   ========================================================================== */
.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    gap: 15px;
}

.flex-item {
    background-color: #e0e0e0;
    color: #1a1a1a;
    padding: 20px;
    min-width: 120px;
    text-align: center;
}


/* ==========================================================================
   6. COLOR CONTRAST & GLOBAL
   ========================================================================== */
body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #1a1a1a;
}
