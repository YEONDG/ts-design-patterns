import Article from './Article';
import EditableDisplayArticle from './EditableDisplayArticle';
import SimpleDisplayArticle from './SimpleDisplayArticle';

const article = new Article('반가워요 제목', ['하이', '두번쨰', '뭔데'], 'YDG');

const display = new SimpleDisplayArticle(article);
document.querySelector('.content').innerHTML = display.displayHtml();

document.querySelector('.edit-mode').addEventListener('change', (e) => {
  let display;

  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  document.querySelector('.content').innerHTML = display.displayHtml();
});
