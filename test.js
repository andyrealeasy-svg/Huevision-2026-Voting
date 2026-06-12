import { JSDOM } from 'jsdom';
import fs from 'fs';

const dom = new JSDOM('<div id=\"app\"></div>', { url: 'http://localhost', runScripts: 'dangerously' });
const script = fs.readFileSync('main.js', 'utf8');
try {
  dom.window.eval(script);
  console.log('App HTML length:', dom.window.document.getElementById('app').innerHTML.length);
} catch(e) {
  console.error('Error:', e.message, e.stack);
}
