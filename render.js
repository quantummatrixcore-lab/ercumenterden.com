/**
 * render.js
 * Ercüment Erden Portal Server-Side Render & Data Helper
 */
'use strict';

const fs = require('fs');
const path = require('path');

function getContent() {
  const filePath = path.join(__dirname, 'content.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, ''));
}

function render() {
  const data = getContent();
  const syndList = Array.isArray(data.syndicate) ? data.syndicate : (data.syndicate && data.syndicate.members ? data.syndicate.members : []);
  const projList = Array.isArray(data.projects) ? data.projects : [];
  return {
    portalName: (data.meta && data.meta.portalName) || 'Ercüment Erden Sovereign Authority',
    founder: (data.founder && data.founder.name) || 'Ercüment Erden',
    title: (data.founder && data.founder.title) || 'Kurucu & Egemen Sistemler Baş Mimarı',
    syndicateCount: syndList.length,
    projectsCount: projList.length
  };
}

module.exports = { render, getContent };
