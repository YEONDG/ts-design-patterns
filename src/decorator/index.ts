import BoxDecorator from './BoxDecorator';
import LineNumberDecorator from './LineNumberDecorator';
import SideDecorator from './SideDecorator';
import Strings from './Strings';

const strs = new Strings();

strs.add('hello!');
strs.add('hello!hello!');
strs.add('hello!hello!hello!hello!');
strs.add('hello!hello!hello!hello!hello!');

const domPre = document.querySelector('pre');
// strs.print(domPre);

// const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);

// const d2 = new LineNumberDecorator(strs);
// d2.print(domPre);

// const d3 = new BoxDecorator(strs);
// d3.print(domPre);

const d1 = new SideDecorator(strs, '"');
const d2 = new LineNumberDecorator(d1);
const d3 = new BoxDecorator(d2);
d3.print(domPre);
