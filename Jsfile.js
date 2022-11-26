var str = '';//Будет содержать в себе дерево элементов


function DOM_Tree(el,s)//Создаёт дерево элементов
//el – элемент, который необходимо вывести
//s - отступ
{
  str += s +el + '<br>';
  if (el.childNodes.length == 0)//Если нет потомков, то
    return;//выходим из функции
  else 
    //Для каждого потомка вызываем эту же функцию с отсупом + 2 пробела
    for (var i = 0; i<el.childNodes.length;i++) 
	      DOM_Tree(el.childNodes[i],s+'&nbsp;&nbsp;');
        }


function OUTPUT()
{
//Формируем строку с деревом элементов
DOM_Tree(document.body,'');
//Создаём новое окно
//var treeWin = open();
//Выводим дерево в новое окно
//document.write(str);
hhh.innerHTML += str + "<br />";
console.log(str)


}


