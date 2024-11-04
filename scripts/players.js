let contents = document.querySelectorAll('.content[player]');
// sliders - список всех элементов с классом class="contentblocknewsimages"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < contents.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_contents(contents[i]);
}

function init_contents(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.contentblock[playerdata]');
  // Вместо document.query... Получается список всех class="cbicli"
  // которые находятся где-то внутри текущего элемента slider.
  
  let but = slider.querySelector('.playersbutton');
  
  // let i = 0;
  // Номер текущего "открытого" слайда.
  
	but.addEventListener('click', function() {
		
		if(but.getAttribute('data-direction'))
		{
			for (let i = 0; i < slide.length; i++) 
			{
				slide[i].dataset.visibily = true;
			}
			delete but.dataset.direction;
		}
		else
		{
			for (let i = 0; i < slide.length; i++) 
			{
				delete slide[i].dataset.visibily;
			}
			but.dataset.direction = true;
		}		
		but.blur()
	// delete slide[i].dataset.visible;
    // // slide[i] - открытый слайд. Скрываем.
    
    // i = (i + 1) % slide.length; // (*1)
    
    // slide[i].dataset.visible = true;
    // // slide[i] - следующий слайд. Показываем.
  }); 
}