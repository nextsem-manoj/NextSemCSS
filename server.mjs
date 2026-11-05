import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3006;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

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

function getTipsData() {
  const tipsDir = path.join(__dirname, 'tips');
  if (!fs.existsSync(tipsDir)) return [];

  const folders = fs.readdirSync(tipsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  return folders.map(folder => {
    const fPath = path.join(tipsDir, folder);
    let html = '';
    let css = '';

    // Check for index.html / Index.html
    const htmlFiles = ['index.html', 'Index.html'];
    for (const hf of htmlFiles) {
      const hp = path.join(fPath, hf);
      if (fs.existsSync(hp)) {
        html = fs.readFileSync(hp, 'utf-8');
        break;
      }
    }

    const cssFiles = ['style.css', 'Style.css'];
    for (const cf of cssFiles) {
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
      path: `/tips/${folder}/index.html`,
      html,
      css
    };
  });
}

function getProjectsData() {
  return [
    {
      id: '01-modern-layouts-bento-studio',
      title: 'Modern CSS Layouts & Bento Grid Studio',
      description: 'Apple & Vercel style Bento Grids, Container Queries, and pure CSS Masonry.',
      path: '/projects/01-modern-layouts-bento-studio/index.html',
      badge: 'Bento & Grid',
      icon: '📐'
    },
    {
      id: '02-creative-ui-components-kit',
      title: 'Creative CSS UI Components Kit',
      description: '3D perspective tilt cards, glassmorphism 2.0, soft UI neumorphism, and spring toggles.',
      path: '/projects/02-creative-ui-components-kit/index.html',
      badge: 'UI Kit',
      icon: '🎨'
    },
    {
      id: '03-animations-loaders-studio',
      title: 'CSS Animations & Loaders Studio',
      description: 'Quantum orbital spinners, cyberpunk glitch text, skeleton shimmer, and fluid morphing blobs.',
      path: '/projects/03-animations-loaders-studio/index.html',
      badge: 'Keyframes',
      icon: '⚡'
    },
    {
      id: '04-modern-selectors-lab',
      title: 'Modern CSS Selectors & Features Lab',
      description: 'Zero-JS form validation with :has(), sibling hover dimming, native nesting, and OKLCH color mixing.',
      path: '/projects/04-modern-selectors-lab/index.html',
      badge: ':has() & Specs',
      icon: '🔬'
    }
  ];
}

const server = http.createServer((req, res) => {
  let parsedUrl = req.url.split('?')[0];

  // API endpoint for Tips
  if (parsedUrl === '/api/tips') {
    const tips = getTipsData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tips));
    return;
  }

  // API endpoint for Projects
  if (parsedUrl === '/api/projects') {
    const projects = getProjectsData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(projects));
    return;
  }

  // Root endpoint
  if (parsedUrl === '/' || parsedUrl === '/index.html') {
    const homePath = path.join(__dirname, 'index.html');
    if (fs.existsSync(homePath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(homePath).pipe(res);
      return;
    }
  }

  // Direct alias for tips studio
  if (parsedUrl === '/tips' || parsedUrl === '/tips-studio') {
    const studioPath = path.join(__dirname, 'tips-studio.html');
    if (fs.existsSync(studioPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(studioPath).pipe(res);
      return;
    }
  }

  // Case-insensitive file path resolution
  let filePath = path.join(__dirname, decodeURIComponent(parsedUrl));
  if (!fs.existsSync(filePath)) {
    // Try index.html or alternative case
    if (filePath.endsWith('index.html')) {
      const alt = filePath.replace(/index\.html$/, 'Index.html');
      if (fs.existsSync(alt)) filePath = alt;
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 NextSem CSS Ecosystem Server Active:`);
  console.log(`  ➜ Local:   http://localhost:${PORT}/`);
  console.log(`  ➜ Network: http://192.168.29.170:${PORT}/\n`);
});
