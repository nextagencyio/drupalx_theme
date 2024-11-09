import ColorToggleTemplate from './color-toggle.twig';

export default {
  title: 'General/Color Mode Toggle'
};

export const ColorToggle = ColorToggleTemplate.bind({});

ColorToggle.play = () => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById('darkModeSwitch');
  const switchIconElement = document.querySelector(
    '.darkmode-switch .material-symbols-outlined'
  );

  switchElement.addEventListener('change', function () {
    if (this.checked) {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      switchIconElement.textContent = 'dark_mode';
    }
    else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      switchIconElement.textContent = 'light_mode';
    }
  });
};

ColorToggle.args = {};
