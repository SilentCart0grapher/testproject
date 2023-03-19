const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    const h2 = section.querySelector('h2');
    window.alert("You clicked the: " + h2.textContent);
  });
});