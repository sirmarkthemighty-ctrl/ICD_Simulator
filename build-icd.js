#!/usr/bin/env node
// Builds icd-simulator.html from icd-src/ (same pipeline as build-dld.js).
// Usage: node build-icd.js [--no-minify]
const fs = require('fs'), os = require('os'), path = require('path');
const { execFileSync } = require('child_process');
process.env.BROWSERSLIST_IGNORE_OLD_DATA = '1';
const SRC = path.join(__dirname, 'icd-src');
const OUT = path.join(__dirname, 'icd-simulator.html');
const TOOLS = path.join(process.env.LOCALAPPDATA || os.homedir(), 'med-apps-build');
const nm = (...p) => path.join(TOOLS, 'node_modules', ...p);
const VENDOR = ['react/umd/react.production.min.js', 'react-dom/umd/react-dom.production.min.js'];

(async () => {
  const tmp = path.join(os.tmpdir(), `icd-${process.pid}.css`);
  execFileSync(process.execPath, [nm('tailwindcss', 'lib', 'cli.js'), '-c', path.join(SRC, 'tailwind.config.js'),
    '-i', path.join(SRC, 'styles.css'), '-o', tmp, '--minify'], { stdio: 'ignore', env: process.env });
  const css = fs.readFileSync(tmp, 'utf8'); fs.unlinkSync(tmp);

  const jsx = ['data.js', 'audio.js', 'app.jsx'].map(f => fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n\n');
  let js = require(nm('@babel', 'standalone')).transform(jsx, { presets: ['react'], filename: 'bundle.jsx' }).code;
  if (!process.argv.includes('--no-minify')) {
    js = (await require(nm('terser')).minify(js, { compress: { passes: 2 }, mangle: true, format: { comments: false } })).code;
    if (!js) throw new Error('terser produced no output');
  }
  if (/<\/script/i.test(js)) throw new Error('app code contains a literal </script');
  const vendor = VENDOR.map(v => `<script>\n${fs.readFileSync(nm(v), 'utf8').replace(/<\/script/gi, '<\/script')}\n</script>`).join('\n');
  const html = fs.readFileSync(path.join(SRC, 'shell.html'), 'utf8')
    .replace('<!--__VENDOR__-->', () => vendor).replace('/*__CSS__*/', () => css).replace('/*__JS__*/', () => js);
  fs.writeFileSync(OUT, html);
  console.log(`Built ${OUT}: ${(html.length / 1024).toFixed(1)} KB`);
})();

// Artifact variant: the Artifact tool adds its own doctype/html/head/body, so strip ours.
// Run after the build above has written icd-simulator.html (a second tick, so ordering is safe).
setTimeout(() => {
  let h = fs.readFileSync(OUT, 'utf8');
  const bodyCls = (h.match(/<body class="([^"]*)"/) || [])[1] || '';
  h = h.replace(/<!DOCTYPE html>\s*<html[^>]*>\s*<head>/i, '')
    .replace(/<meta charset[^>]*>\s*<meta name="viewport"[^>]*>\s*/i, '')
    .replace(/<\/head>\s*<body[^>]*>/i, `<style>body{background:#f1f5f9}html.dark body{background:#0b1220}</style>\n<div class="${bodyCls}">`)
    .replace(/<title>[^<]*<\/title>/, '<title>Chest Drain Simulator</title>')
    .replace(/<\/body>\s*<\/html>\s*$/i, '</div>\n');
  fs.writeFileSync(OUT.replace(/\.html$/, '.artifact.html'), h);
  console.log('Built artifact variant');
}, 0);
