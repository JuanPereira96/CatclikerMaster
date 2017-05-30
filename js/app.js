var cats = [{
	id: 1,
	name : 'Don Gato y la pandilla',
	photo : 'img/cats/7.jpg',
	voteup:0,
	votedown:0
},
{
	id: 2,
	name : 'Benito',
	photo : 'img/cats/1.jpg',
	voteup:0,
	votedown:0
},
{
	id: 3,
	name : 'Greñas',
	photo : 'img/cats/5.jpg',
	voteup:0,
	votedown:0
},
{
	id: 4,
	name : 'Cat hardcore',
	photo : 'img/cats/4.jpg',
	voteup:0,
	votedown:0
},
{
	id: 5,
	name : 'Hitler',
	photo : 'img/cats/3.jpg',
	voteup:0,
	votedown:0
},
{
	id: 6,
	name : 'Cat will',
	photo : 'img/cats/6.png',
	voteup:0,
	votedown:0
},
{
	id: 7,
	name : 'Gardfiel',
	photo : 'img/cats/9.jpg',
	voteup:0,
	votedown:0
}

]
/*$('#cats-list').ready(init());*/
init();
function init(){
	showCats(cats);
	bindEvent();
}

function clickUp(){
	var cont = parseInt($(this).find('.up').text());
	cont++;
	$(this).find('.up').text(cont);
}
function clickDown(){
	var cont = parseInt($(this).find('.down').text());
	cont++;
	$(this).find('.down').text(cont);
}
function bindEvent(){
	$('.clikerup').click(clickUp);
	$('.clikerdown').click(clickDown);
}
function showCats(cats){
		var template = $('#template')
		var catsTpl;
		for (var i = 0; i < cats.length; i++) {
			var c = cats[i];
			catsTpl = $(template).clone();
			catsTpl.find('h1').text(c.name);
			catsTpl.find('img').attr('src',c.photo);
			catsTpl.find('.clikerup span').text(c.voteup);
			catsTpl.find('.clikerdown span').text(c.votedown);
			$('#cats-list').append(catsTpl);
		}
}