const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    //const closeBtn = modal.querySelector(".popup-close");
    const MOBILE_WIDTH = 768;
    let idInterval;
    let count = 0;

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            showModal();
        });
    });
    /*  closeBtn.addEventListener("click", () => {
modal.style.display = "none"; //закрывает
});*/

    const showModal = () => {
        if ((modal.style.display = "none")) {
            modal.style.display = "block"; //окно открылось
            modal.style.transform = "translateX(0)";
            if (document.documentElement.offsetWidth >= MOBILE_WIDTH) {
                animationFuncModul();
            }
        }
    };

    const animationFuncModul = () => {
        idInterval = requestAnimationFrame(animationFuncModul);
        count += 5;

        if (count <= 100) {
            modal.style.transform = `translateX(${100 - count}%)`;
        } else {
            cancelAnimationFrame(idInterval);
            modal.style.display = "block";
            count = 0;
        }
    };

    modal.addEventListener("click", (e) => {
        console.log("e.trget.closest");
        if (!e.target.closest(".popup-content") ||
            e.target.classList.contains("popup-close")
        ) {
            //console.log("out");
            modal.style.display = "none";
        }
    });
    /*
            //навешивание делегирования на весь документ
            document.addEventListener("click", (e) => {
                if (e.target.classList.contains("popup-btn")) {
                    e.preventDefault();
                    modal.style.display = "block";
                }
            });
            //навешивание делегирования на TAG button
            document.addEventListener("click", (e) => {
                if (e.target.matches("button")) {
                    modal.style.display = "block";
                }
            });*/
};

export default modal;