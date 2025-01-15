const buttons = document.querySelectorAll('.btn-about.abit-3');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.event-sect').forEach(eventSect => {
      eventSect.classList.remove('active-shadow');
    });
    const eventSect = button.closest('.event-sect');
    eventSect.classList.add('active-shadow');
  });
});


const defaultSlider = new Swiper('.default-slider', {
	speed: 400,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,
	

	navigation: {
		enabled: true,
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",	
	},

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		800: {
			slidesPerView: 2,
		},

		1024: {
			slidesPerView: 3,
			pagination: {
				enabled: false,
			},
		},

		1300: {
			slidesPerView: 4,
			pagination: {
				enabled: false,
			},
		},
	},
});


//montias
const montiasSlider = new Swiper('.montias-slider', {
	speed: 400,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,
	

	navigation: {
		enabled: true,
		nextEl: ".swiper-button-next_mones",
		prevEl: ".swiper-button-prev_mones",	
	},

	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},

	breakpoints: {
		800: {
			slidesPerView: 1,
		},	
	},
});




//title labal//
document.querySelectorAll('.control-box').forEach((label) => {
	label.addEventListener('click', () => {
	  document.querySelectorAll('.control-box').forEach((box) => {
		box.classList.remove('active');
	  });
	  label.classList.add('active');
	});
  });
  document.addEventListener("DOMContentLoaded", () => {
    const firstElement = document.querySelector(".control-box");
    if (firstElement) {
        firstElement.classList.add("active");
    }
});








//password//
function showPassword() {
	const btn = document.querySelector('.password__btn')
	const input = document.querySelector('.password__input')

	btn.addEventListener('click', () => {
		btn.classList.toggle('active')

		if (input.getAttribute('type') === 'password') {
			input.setAttribute('type', 'text')
		} else {
			input.setAttribute('type', 'password')

		}
	})
}
showPassword()




  
//list-grid//

const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const ltg = document.querySelector(".ltg");

list.addEventListener("click", () => {
    ltg.classList.add("list");
    ltg.classList.remove("grid");

    list.classList.add("active-border");
    grid.classList.remove("active-border");
});

grid.addEventListener("click", () => {
    ltg.classList.add("grid");
    ltg.classList.remove("list");

    grid.classList.add("active-border");
    list.classList.remove("active-border");
});











/*blog-2 blog-card*/
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.custom-input');
    const blogCards = document.querySelectorAll('.blog-card');

    // Функция для фильтрации карточек
    const filterCards = (filter) => {
        blogCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    // Слушатель событий на радио-кнопки
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            filterCards(event.target.value);
        });
    });

    // Инициализация: отображение всех карточек при загрузке страницы
    filterCards('all');
});
