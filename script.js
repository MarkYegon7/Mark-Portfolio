const hamburgerMenu = document.querySelector('.image-icon');
const desktopMenu = document.querySelector('.name-1');
const clickButton = document.querySelector('#close_button');
const navigationNav = document.querySelectorAll('.mobile-Menu-list > li> a');

function clickOn() {
  desktopMenu.style.display = 'flex';
}

function closeMenu() {
  desktopMenu.style.display = 'none';
}

hamburgerMenu.addEventListener('click', clickOn);
clickButton.addEventListener('click', closeMenu);
navigationNav.forEach((each) => each.addEventListener('click', closeMenu));

const popup = [
  {
    name: 'Tonic',
    closeImage: 'images/Icon.svg',
    counterImg: 'images/Counter.svg',
    short_description: ['CANOPY', 'Back End Dev', '2015'],
    mobileImage: 'images/Snapshoot Portfolio.svg',
    desktopImage: 'images/Snapshoot Portfolio1.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://markyegon7.github.io/Mark-Portfolio/',
    sourceLink: 'https://github.com/MarkYegon7/Mark-Portfolio',
  },

  {
    name: 'Multi-Post',
    closeImage: 'images/Icon.svg',
    counterImg: 'images/Counter.svg',
    short_description: ['CANOPY', 'Back End Dev', '2015'],
    mobileImage: 'images/Snapshoot Portfolio (1).svg',
    desktopImage: 'images/Snapshoot Portfolio2.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://markyegon7.github.io/Mark-Portfolio/',
    sourceLink: 'https://github.com/MarkYegon7/Mark-Portfolio',
  },

  {
    name: 'Tonic',
    closeImage: 'images/Icon.svg',
    counterImg: 'images/Counter.svg',
    short_description: ['CANOPY', 'Back End Dev', '2015'],
    counterImage: 'images/Counter.svg',
    mobileImage: 'images/Snapshoot Portfolio (2).svg',
    desktopImage: 'images/Snapshoot Portfolio3.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://markyegon7.github.io/Mark-Portfolio/',
    sourceLink: 'https://github.com/MarkYegon7/Mark-Portfolio',
  },

  {
    name: 'Multi-Post',
    closeImage: 'images/Icon.svg',
    counterImg: 'images/Counter.svg',
    short_description: ['CANOPY', 'Back End Dev', '2015'],
    mobileImage: 'images/Snapshoot Portfolio (3).svg',
    desktopImage: 'images/Snapshoot Portfolio4.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://markyegon7.github.io/Mark-Portfolio/',
    sourceLink: 'https://github.com/MarkYegon7/Mark-Portfolio',
  },
];

// Function to create the cards
function createCards() {
  // Get the card container element
  const cardContainer = document.getElementById('works');

  // Iterate over the popup array
  popup.forEach((cardData, index) => {
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('works-container', 'works'); // Add a class to style the card if needed

    // Create the card content
    const cardContent = `
      <section class="works-container" id="works-container"
      <div id="works works2 works3 works4">
        <img src="${cardData.mobileImage}" alt="Mobile Image" class="image-mobile">
        <img src="${cardData.desktopImage}" alt="Desktop Image" class="image-desktop">
          <div class="w_ctn">
            <h2 class="header">${cardData.name}</h2>
            <ul class="description">
              <li class="canopy">${cardData.short_description[0]}</li>
              <li><img src="${cardData.counterImg}" alt="" id="counter"></li>
              <li class="back">${cardData.short_description[1]}</li>
              <li><img src="${cardData.counterImg}" alt="" id="counter"></li>
              <li class="back">${cardData.short_description[2]}</li>
            </ul>
            <p class="more-info">${cardData.description}</p>
            <ul class="languages">
              ${cardData.technologies.map((technology) => `<li class="lang">${technology}</li>`).join('')}
            </ul>
            <button class="see" data-index="${index}">See Project</button>
        </div>
      </div>
      </section>
      `;

    // Set the card content
    card.innerHTML = cardContent;

    // Append the card to the container
    cardContainer.appendChild(card);
  });
}

// Function to create the popup
function createPopup(cardData) {
  // Create the popup element
  const popup = document.createElement('div');
  popup.classList.add('popup');

  // Create the popup content
  const popupContent = `
      <div class="pop_works">
          <div class="popup-header">
            <img src="${cardData.closeImage}" alt="Close" class="popup_xclose">
            <h2 class="header-pop">${cardData.name}</h2>
          </div>
          <ul class="pop_description">
            <li class="pop_canopy">${cardData.short_description[0]}</li>
            <li><img src="${cardData.counterImg}" alt="" id="counter"></li>
            <li class="pop_back">${cardData.short_description[1]}</li>
            <li><img src="${cardData.counterImg}" alt="" id="counter"></li>
            <li class="pop_back">${cardData.short_description[2]}</li>
          </ul>
          <div class="popup-body">
            <img src="${cardData.mobileImage}" alt="Mobile Image" class="pop_image">
            <img src="${cardData.desktopImage}" alt="Desktop Image" class="popdsk_image">
          
            <div class="pop_grid">
              <div>
                <p class="pop_more-info">${cardData.description}</p>
              </div>
              <div class="left-side">
                <ul class="pop_languages">
                  ${cardData.technologies.map((technology) => `<li class="pop_lang">${technology}</li>`).join('')}
                </ul>
              <div class="button-see">
                <button class="pop_see"><a href="${cardData.liveLink}" target="_blank">Live Link <img src="images/liveImage.svg" alt="" srcset=""></a></button>
                <button class="pop_see"><a href="${cardData.sourceLink}" target="_blank">Source Link <img src="images/sourceImage.svg" alt=""></a></button>
              </div>
                </div>
                
            </div>
          </div>
          <hr class="pop_hr">
      </div> 
    `;

  // Set the popup content
  popup.innerHTML = popupContent;

  // Append the popup to the popup container
  const popupContainer = document.getElementById('popup-container');
  popupContainer.innerHTML = '';
  popupContainer.appendChild(popup);

  // Add event listener to the close button
  const closeButton = popup.querySelector('.popup_xclose');
  closeButton.addEventListener('click', () => {
    popupContainer.classList.add('hidden');
  });
}

// Call the createCards() function to generate the cards
createCards();

// Add event listeners to the "See Project" buttons
const projectButtons = document.querySelectorAll('.see');
projectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const { index } = event.target.dataset;
    const cardData = popup[index];
    createPopup(cardData);
    const popupContainer = document.getElementById('popup-container');
    popupContainer.classList.remove('hidden');
  });
});

// Validation form
const formVal = document.getElementById('contactForm');

function notLowercase(arg) {
  if (arg.match(/^[a-z@.0-9-_]*$/)) {
    return false;
  }
  return true;
}

formVal.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorMessage = document.getElementById('alertP');

  if (notLowercase(formVal.elements.email.value)) {
    const alertMessage = 'Please write your email in lowercase eg.(myemail@mydomain.com)';
    errorMessage.innerHTML = alertMessage;
    errorMessage.classList.add('alertPmessage');
  } else {
    errorMessage.innerHTML = '';
    errorMessage.classList.remove('alertPmessage');
    formVal.submit();
  }
});