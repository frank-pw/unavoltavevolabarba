import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('portfolio shows the selected GitHub projects and sits between Blog and Contatti', async () => {
  const [portfolio, nav] = await Promise.all([
    readFile(new URL('../portfolio.html', import.meta.url), 'utf8'),
    readFile(new URL('../nav.js', import.meta.url), 'utf8'),
  ]);

  assert.match(portfolio, /https:\/\/github\.com\/frank-pw\/deep-cat-blue/);
  assert.match(portfolio, /<img[^>]+src="assets\/preview\.png"[^>]*>/);
  assert.match(portfolio, /<h2>deep-cat-blue<\/h2>[\s\S]*?<p class="project-meta">Tema VS Code<\/p>/);
  assert.match(portfolio, /https:\/\/github\.com\/frank-pw\/cordyceps/);
  assert.match(portfolio, /<img[^>]+src="assets\/preview%202\.png"[^>]*>/);
  assert.match(portfolio, /<h2>cordyceps<\/h2>[\s\S]*?<p class="project-meta">Tema Obsidian<\/p>/);
  assert.match(portfolio, /https:\/\/frankpw\.bandcamp\.com\//);
  assert.match(portfolio, /<img[^>]+src="assets\/kids-bandcamp\.jpg"[^>]*>/);
  assert.match(portfolio, /<h2>Frank PW<\/h2>[\s\S]*?<p class="project-meta">Musicista e Beat Maker<\/p>/);
  assert.ok(nav.indexOf("href: 'blog.html'") < nav.indexOf("href: 'portfolio.html'"));
  assert.ok(nav.indexOf("href: 'portfolio.html'") < nav.indexOf("href: 'contatti.html'"));
});
