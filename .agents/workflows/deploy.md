# Workflow: deploy
# Trigger: /deploy

## Steps
1. Run npm run build — stop if errors
2. Run npm run lint — stop if errors
3. Load vercel-deploy SKILL
4. Run Lighthouse audit locally
5. If score < 90: identify bottlenecks, fix, re-run
6. Push to Vercel via CLI: vercel --prod
7. Open deployed URL in browser
8. Screenshot homepage
9. Report: live URL + Lighthouse score + screenshot
