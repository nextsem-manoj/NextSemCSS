const fs = require('fs');
const path = require('path');

const cssDir = 'c:/Users/Manoj/nextsemorg/css';
const tipsDir = path.join(cssDir, 'tips');

function categorizeTip(name) {
  const n = name.toLowerCase();
  if (n.includes('btn') || n.includes('button') || n.includes('hoverbtn')) return 'Buttons & Hovers';
  if (n.includes('animation') || n.includes('glitch') || n.includes('loader') || n.includes('spiner') || n.includes('wave') || n.includes('typing') || n.includes('scroll')) return 'Animations & Loaders';
  if (n.includes('bg') || n.includes('gradient') || n.includes('linear') || n.includes('shimmer') || n.includes('colormix')) return 'Backgrounds & Gradients';
  if (n.includes('center') || n.includes('flex') || n.includes('column') || n.includes('responsive') || n.includes('order') || n.includes('bento') || n.includes('container') || n.includes('subgrid')) return 'Layout & Flexbox';
  if (n.includes('input') || n.includes('check') || n.includes('radio') || n.includes('password') || n.includes('search') || n.includes('form') || n.includes('switch')) return 'Forms & Inputs';
  if (n.includes('image') || n.includes('blur') || n.includes('mirror') || n.includes('filter')) return 'Images & Media';
  if (n.includes('text') || n.includes('font') || n.includes('letter') || n.includes('word') || n.includes('truncate') || n.includes('neon') || n.includes('heading')) return 'Typography & Text';
  if (n.includes('border') || n.includes('shadow') || n.includes('outline') || n.includes('glass')) return 'Borders & Shadows';
  if (n.includes('has') || n.includes('starting') || n.includes('selector')) return 'Modern CSS Specs';
  return 'UI Components & Misc';
}

const folders = fs.readdirSync(tipsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

const tips = folders.map(folder => {
  const fPath = path.join(tipsDir, folder);
  let html = '';
  let css = '';
  for (const hf of ['index.html', 'Index.html']) {
    const hp = path.join(fPath, hf);
    if (fs.existsSync(hp)) {
      html = fs.readFileSync(hp, 'utf-8');
      break;
    }
  }
  for (const cf of ['style.css', 'Style.css']) {
    const cp = path.join(fPath, cf);
    if (fs.existsSync(cp)) {
      css = fs.readFileSync(cp, 'utf-8');
      break;
    }
  }
  const formattedName = folder
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();

  return {
    id: folder,
    name: formattedName,
    category: categorizeTip(folder),
    path: './tips/' + folder + '/index.html',
    html,
    css
  };
});

fs.writeFileSync(path.join(cssDir, 'tips.json'), JSON.stringify(tips, null, 2), 'utf-8');
console.log('Successfully generated ' + tips.length + ' tips into ' + path.join(cssDir, 'tips.json'));

