import CaptionDisplay from './CaptionDisplay';
import CharactersCounter from './CharactersCount';
import Draft from './Draft';
import SimpleDisplay from './SimpleDisplay';

const title = '복원된 지구';
const author = '홍길동';
const content = ['텍스트1', '텍스트2', '텍스트3'];

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);

// const display = new SimpleDisplay();
const display = new CaptionDisplay();

draft.print(display);

console.log(`전체 문자수: ${draft.getCharactersCount()}`);
