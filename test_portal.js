/**
 * test_portal.js
 * Verification Suite for Ercüment Erden Sovereign Portal
 */
'use strict';

const http = require('http');
const { server } = require('./app.js');

const TEST_PORT = 3388;
let passed = 0;
let total = 0;

function assert(condition, msg) {
  total++;
  if (!condition) {
    console.error('❌ FAIL: ' + msg);
    process.exit(1);
  }
  console.log('✅ PASS: ' + msg);
  passed++;
}

function httpGet(path) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:' + TEST_PORT + path, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('╔════════════════════════════════════════════════════════════════════╗');
  console.log('║   ERCUMENTERDEN.COM SOVEREIGN PORTAL VERIFICATION SUITE            ║');
  console.log('╚════════════════════════════════════════════════════════════════════╝\n');

  await new Promise(resolve => server.listen(TEST_PORT, resolve));
  console.log('Test server active on port ' + TEST_PORT + '\n');

  try {
    // 1. GET /
    const home = await httpGet('/');
    assert(home.statusCode === 200, 'GET / returns 200 OK');
    assert(home.headers['content-type'].includes('text/html'), 'GET / has Content-Type text/html');
    assert(home.body.includes('Ercüment Erden'), 'Homepage contains Founder name Ercüment Erden');
    assert(home.body.includes('Ahmet Rıfat Albuz'), 'Homepage contains Syndicate member Ahmet Rıfat Albuz');
    assert(home.body.includes('Musa Aygül'), 'Homepage contains Syndicate member Prof. Dr. Musa Aygül');
    assert(home.body.includes('ALPAR AI'), 'Homepage contains ALPAR AI showcase');
    assert(home.body.includes('DECASHUB'), 'Homepage contains DECASHUB showcase');
    assert(home.body.includes('LIONEXIA'), 'Homepage contains LIONEXIA showcase');
    assert(home.body.includes('ERCUOS'), 'Homepage contains ERCUOS showcase');

    // 2. GET /design_tokens.css
    const css = await httpGet('/design_tokens.css');
    assert(css.statusCode === 200, 'GET /design_tokens.css returns 200 OK');
    assert(css.headers['content-type'].includes('text/css'), 'GET /design_tokens.css has Content-Type text/css');
    assert(css.body.includes('--bg-void'), 'CSS contains obsidian dark tokens');

    // 3. GET /content.json
    const cRes = await httpGet('/content.json');
    assert(cRes.statusCode === 200, 'GET /content.json returns 200 OK');
    assert(cRes.headers['content-type'].includes('application/json'), 'Content-Type application/json');
    const json = JSON.parse(cRes.body);
    assert(json.founder.name === 'Ercüment Erden', 'content.json founder matches');
    const syndCount = Array.isArray(json.syndicate) ? json.syndicate.length : (json.syndicate.members ? json.syndicate.members.length : 0);
    assert(syndCount === 2, 'content.json syndicate has 2 members');
    assert(json.projects.length === 4, 'content.json contains 4 projects');

    // 4. REST API: GET /api/health
    const health = await httpGet('/api/health');
    assert(health.statusCode === 200, 'GET /api/health returns 200 OK');
    const healthJson = JSON.parse(health.body);
    assert(healthJson.status === 'ok', 'Health status is ok');

    // 5. REST API: GET /api/founder
    const founderApi = await httpGet('/api/founder');
    assert(founderApi.statusCode === 200, 'GET /api/founder returns 200 OK');
    const founderJson = JSON.parse(founderApi.body);
    assert(founderJson.competencies.length === 4, 'Founder has 4 core competencies');

    // 6. REST API: GET /api/syndicate
    const syndicateApi = await httpGet('/api/syndicate');
    assert(syndicateApi.statusCode === 200, 'GET /api/syndicate returns 200 OK');
    const syndicateJson = JSON.parse(syndicateApi.body);
    const syndicateList = Array.isArray(syndicateJson) ? syndicateJson : (syndicateJson.members || []);
    assert(syndicateList.some(m => m.name.includes('Albuz')), 'Syndicate API contains Albuz');
    assert(syndicateList.some(m => m.name.includes('Aygül')), 'Syndicate API contains Aygül');

    // 7. REST API: GET /api/projects
    const projectsApi = await httpGet('/api/projects');
    assert(projectsApi.statusCode === 200, 'GET /api/projects returns 200 OK');
    const projectsJson = JSON.parse(projectsApi.body);
    assert(projectsJson.length === 4, 'Projects API returns 4 flagship projects');

    // 8. 404 Route
    const notFound = await httpGet('/non-existent-route-check');
    assert(notFound.statusCode === 404, 'Unknown route returns 404 Not Found');

    console.log('\n════════════════════════════════════════════════════════════════════');
    console.log('🏆 ALL TESTS PASSED: ' + passed + '/' + total + ' (100% GREEN)');
    console.log('════════════════════════════════════════════════════════════════════\n');
  } finally {
    server.close();
  }
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
