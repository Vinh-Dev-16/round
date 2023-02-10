document.addEventListener('DOMContentLoaded', function () {

    // Phần khai báo link các ảnh

    const imgArray = [
        {
            name: 'Ảnh 1',
            img: 'images/Thuynhai.jpg'
        },
        {
            name: 'Ảnh 2',
            img: 'images/Thuynhai2.jpg'
        },
        {
            name: 'Ảnh 3',
            img: 'images/Thuynhai3.jpg'
        },
        {
            name: 'Ảnh 4',
            img: 'images/Thuynhai4.jpg'
        },
        {
            name: 'Ảnh 5',
            img: 'images/Thuynhai5.jpg'
        },
        {
            name: 'Ảnh 6',
            img: 'images/Thuynhai.jpg'
        },
        {
            name: 'Ảnh 7',
            img: 'images/Thuynhai2.jpg'
        },
        {
            name: 'Ảnh 8',
            img: 'images/Thuynhai3.jpg'
        },
    ]

    let icon = document.querySelector('.icon');
    let content = document.querySelector('.content');
   
    //    Chạy chương trình start

    start();
    function start() {
        createImage();
        createContent();
    }

    //   Khai báo tạo ảnh

    function createImage() {
        for (let i = 0; i < imgArray.length; i++) {
            let divIcon = document.createElement('div');
            divIcon.classList.add('imgBx');
            divIcon.style = `--i:${i}`;
            divIcon.setAttribute('data-id', 'content' + parseInt(i + 1));
            const img = document.createElement('img');
            img.setAttribute('src', imgArray[i].img);
            icon.append(divIcon);
            divIcon.appendChild(img);
        }
    }

    // Phần khai báo content

    function createContent() {
        for (let i = 0; i < imgArray.length; i++) {
            let contentBx = document.createElement('div');
            contentBx.classList.add('contentBx');
            contentBx.setAttribute('id', 'content' + parseInt(i + 1));
            let card = document.createElement('div');
            card.classList.add('card');
            let imgBx = document.createElement('div');
            imgBx.classList.add('imgBx');
            const img = document.createElement('img');
            img.setAttribute('src', imgArray[i].img);
            content.append(contentBx);
            contentBx.appendChild(card);
            card.appendChild(imgBx);
            imgBx.appendChild(img);
            let textBx = document.createElement('div');
            textBx.classList.add('textBx');
            card.appendChild(textBx);
            let output = `
            <h2>Cho Mày Này</h2><span>Thúy Nhài</span>
            <ul class="sri">
                <li><a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-brands fa-facebook-messenger"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                </li>
            </ul>
            `
            textBx.innerHTML = output;
            
        }
    };

    let imgBx = document.querySelectorAll('.imgBx');
    icon.firstElementChild.classList.add('active');
    let contentBx = document.querySelectorAll('.contentBx');
    content.firstElementChild.classList.add('active');

    
    // Phần click ảnh

    function clickImages() {
        for (let i = 0; i < imgBx.length; i++) {
            imgBx[i].addEventListener("click", function () {
                for (let i = 0; i < contentBx.length; i++) {
                    contentBx[i].className = 'contentBx';
                }
                document.getElementById(this.dataset.id).className = "contentBx active";
                for (let i = 0; i < imgBx.length; i++) {
                    imgBx[i].className = 'imgBx';
                }
                this.className = 'imgBx active';
            })
        }
    }
    clickImages();
})