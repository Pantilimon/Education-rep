document.addEventListener('DOMContentLoaded', () => {
  // Находим все элементы с классом 'character-card' и элементы, которые нужно изменить
  const buttons = document.querySelectorAll('.character-card');
  const characterInfo = document.getElementById('character-info');
  const headDescription = document.getElementById('head-description');
  const characterDescription = document.getElementById('character-description');
  const characterImage = document.getElementById('character-image');
  const characterEl = document.getElementById('elements');
  
  let selectedCard = null; // Переменная для хранения ссылки на текущую выбранную карточк

  // Определяем объекты, содержащие данные для каждого персонажа
  const characterData = {
    character1: {
      description: 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Огонь - программист', 
      image: 'img/fireman.png',
      imageEl: 'img/ElementsFire.png',
      useBut: 'img/But/ButFire.png',
      But: 'img/But/fire.png',
    },
    character2: {
      description: ' Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Вода - жидкий',
      image: 'img/waterman.png',
      imageEl: 'img/ElementsWater.png',
      useBut: 'img/But/ButWater.png',
      But: 'img/But/water.png',
      
    },
    character3: {
      description: ' Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.', 
      head: 'Зе(м)ля - хто я?',
      image: 'img/earthman.png',
      imageEl: 'img/ElementsEarth.png',
      useBut: 'img/But/ButEarth.png',
      But: 'img/But/earth.png',
    },
    character4: {
      description: 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.',
      head: 'Воздух - воздухан',
      image: 'img/wingman.png',
      imageEl: 'img/ElementsWind.png',
      useBut: 'img/But/ButWind.png',
      But: 'img/But/wind.png',
    },
  };

  // Добавляем обработчик события 'click' к каждому элементу 'character-card'
  buttons.forEach(card => {
    card.addEventListener('click', () => {
      const selectedCharacter = card.dataset.character;

      if (selectedCard === card) {
        // Если уже выбран, снимаем выбор
        selectedCard.querySelector('.button-img').src = characterData[selectedCharacter].But;
        selectedCard.classList.remove('selected');
        headDescription.textContent = 'Общая информация';
        characterDescription.textContent = 'Утратив Искру, мы лишились возможности вернуть нашу планету к жизни. Но судьба в награду подарила нам новый мир, который мы назовём своим домом. Теперь мы живём среди людей, скрывая свое истинное лицо, и тайно за ними наблюдаем… Ждём, защищаем. Я увидел, на какую отвагу они способны, и хотя нас разделяют миры, с ними, как и с нами всё не так.';
        characterEl.src = 'img/ElementsAll.png';
        characterInfo.className = 'character-info';
        characterDescription.className = 'character-description';
        selectedCard = null;
        // Добавляем класс для анимации исчезания изображения
        characterImage.classList.add('image-animate-out'); 
        characterImage.addEventListener('animationend', () => {
          if (characterImage.classList.contains('image-animate-out')) {
            characterImage.src = '';
            characterImage.classList.remove('image-animate-out');
          }
        }, { once: true });
      } else {
        // Снимаем выбор с предыдущей карточки, если она была выбрана
        if (selectedCard) {
          selectedCard.querySelector('.button-img').src = characterData[selectedCard.dataset.character].But;
          selectedCard.classList.remove('selected');
        }

        // Устанавливаем выбор на текущую карточку
        card.classList.add('selected');
        selectedCard = card;
        // Обновляем информацию о персонаже
        headDescription.textContent = characterData[selectedCharacter].head;
        characterDescription.textContent = characterData[selectedCharacter].description;
        // Меняем картинки персонажей и элементов
        characterEl.src = characterData[selectedCharacter].imageEl;
        characterImage.src = characterData[selectedCharacter].image;
        // Меняем кнопку на нажатую
        card.querySelector('.button-img').src = characterData[selectedCharacter].useBut;
        // Добавляем анимацию к изображению
        characterImage.classList.remove('image-animate'); // Убираем предыдущую анимацию
        void characterImage.offsetWidth; // Перезапускаем анимацию
        characterImage.classList.add('image-animate');
        // Добавляем анимацию к element
        сard.querySelector('.button-img').classList.add('element-animate');
        сard.querySelector('.button-img').addEventListener('animationElend', () => {
          if (characterImage.classList.contains('element-animate')) {
            characterImage.src = characterData[selectedCharacter].useBut;
            characterImage.classList.remove('element-animate');
          }
        }, { once: true });
        // Добавляем класс, чтобы применить стили css
        characterInfo.className = selectedCharacter;
      }
    });
  });
});
