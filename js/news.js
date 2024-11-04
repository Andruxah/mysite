// const ImageChangeButtClick = (offset)=>{
	// const VisibleImg = document.querySelector("[data-visible]")
	// const Imgs = [...document.querySelectorAll(".cbicli")]
	// const Ind = Imgs.indexOf(VisibleImg)
	// let newInd = Ind + offset;
	
	// if(newInd < 0) newInd = Imgs.length - 1
	// if(newInd >= Imgs.length) newInd = 0
	
	// Imgs[newInd].dataset.visible = true;
	// delete VisibleImg.dataset.visible
// }

// const onNext = ()=> ImageChangeButtClick(1)
// const onPrev = ()=> ImageChangeButtClick(-1)




let sliders = document.querySelectorAll('.contentblocknewsimages');
// sliders - список всех элементов с классом class="contentblocknewsimages"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.cbicli');
  // Вместо document.query... Получается список всех class="cbicli"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = slider.querySelector('#next');
  // Кнопка next внутри этого slider.
  
  let prev = slider.querySelector('#prev');
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
	next.addEventListener('click', function() {
	delete slide[i].dataset.visible;
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].dataset.visible = true;
    // slide[i] - следующий слайд. Показываем.
	
	next.blur();
  });

	prev.addEventListener('click', function() {
	delete slide[i].dataset.visible;
    // slide[i] - открытый слайд. Скрываем.
    
	if(i == 0) {i = slide.length - 1;} // (*1)
	else {i = i - 1;}
    
    slide[i].dataset.visible = true;
    // slide[i] - следующий слайд. Показываем.
	
	prev.blur();
  });  
}