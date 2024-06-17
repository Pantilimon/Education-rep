document.addEventListener('DOMContentLoaded', () => {
  // Находим все элементы с классом 'character-card' и элементы, которые нужно изменить
  const buttons = document.querySelectorAll('.character-card');
  const characterInfo = document.getElementById('character-info');
  const headDescription = document.getElementById('head-description');
  const characterDescription = document.getElementById('character-description');
  const characterImage = document.getElementById('character-image');
  const but = document.querySelector('.diamond-btn')

  
  let selectedCard = null; // Переменная для хранения ссылки на текущую выбранную карточк

  // Определяем объекты, содержащие данные для каждого персонажа
  // Оказывается, можно менять цвет у вектора, а не скачивать новое изображение... и тогда код на строчки 7 корчое и правильнее будет, но менять мне лень)
  const characterData = {
    character1: {
      description: 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Огонь - программист', 
      image: 'img/fireman.png',
      useBut: 'img/But/ButFire.svg',
      But: 'img/But/fire.svg',
      vec: 'btn1',
    },
    character2: {
      description: ' Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Вода - жидкий',
      image: 'img/waterman.png',
      useBut: 'img/But/ButWater.svg',
      But: 'img/But/water.svg',
      vec: 'btn4',
      
    },
    character3: {
      description: ' Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.', 
      head: 'Зе(м)ля - хто я?',
      image: 'img/earthman.png',
      useBut: 'img/But/ButEarth.svg',
      But: 'img/But/earth.svg',
      vec: 'btn2',
    },
    character4: {
      description: 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Воздух - воздухан',
      image: 'img/wingman.png',
      useBut: 'img/But/ButWind.svg',
      But: 'img/But/wind.svg',
      vec: 'btn3',
    },
  };

  // Добавляем обработчик события 'click' к каждому элементу 'character-card'
  buttons.forEach(card => {
    card.addEventListener('click', () => {
      const selectedCharacter = card.dataset.character;

      if (selectedCard === card) {
        // Если уже выбран, снимаем выбор
        selectedCard.querySelector('.button-img').src = characterData[selectedCharacter].But;
        selectedCard.querySelector('.button-img').classList.toggle('shadow')
        selectedCard.classList.remove('selected');
        headDescription.textContent = 'Общая информация';
        characterDescription.textContent = 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.';
        characterInfo.className = 'character-info';
        characterDescription.className = 'character-description';
        selectedCard = null;

        document.querySelector(`.${characterData[selectedCharacter].vec}`).classList.toggle('active')


        // Добавляем класс для анимации исчезания изображения
        characterImage.classList.add('image-animate-out'); 
        characterImage.addEventListener('animationend', () => {
          if (characterImage.classList.contains('image-animate-out')) {
            characterImage.src = '';
            characterImage.classList.remove('image-animate-out');
          }
        }, { once: true });
      } else {
        // Снимаем выбор (тень, цвет, меняем розу) с предыдущей карточки, если она была выбрана
        if (selectedCard) {
          document.querySelector(`.${characterData[selectedCard.dataset.character].vec}`).classList.toggle('active')
          selectedCard.querySelector('.button-img').classList.toggle('shadow')
          selectedCard.querySelector('.button-img').src = characterData[selectedCard.dataset.character].But;
          selectedCard.classList.remove('selected');
        }

        // Устанавливаем выбор на текущую карточку
        card.classList.add('selected');
        selectedCard = card;
        // Обновляем информацию о персонаже


        document.querySelector(`.${characterData[selectedCharacter].vec}`).classList.toggle('active')
        // but.classList.toggle('active')

        headDescription.textContent = characterData[selectedCharacter].head;
        characterDescription.textContent = characterData[selectedCharacter].description;
        // Меняем картинки персонажей и элементов
        characterImage.src = characterData[selectedCharacter].image;
        // Меняем кнопку на нажатую !!!!!!!!!!!!!!!!!!!!!!!!!!
        card.querySelector('.button-img').src = characterData[selectedCharacter].useBut;
        // Анимация выезжания тени у кнопки
        card.querySelector('.button-img').classList.toggle('shadow')
        // Добавляем анимацию к изображению
        characterImage.classList.remove('image-animate'); // Убираем предыдущую анимацию
        void characterImage.offsetWidth; // Перезапускаем анимацию
        characterImage.classList.add('image-animate');
        // Добавляем анимацию к элементу
        // Добавляем класс, чтобы применить стили css
        characterInfo.className = selectedCharacter;
      }
    });
  });
});
