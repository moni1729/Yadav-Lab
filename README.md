# Yadav Research Group website

This is the source for the Monika Yadav Research Group website at Old Dominion University.

Live website: <https://moni1729.github.io/Yadav-Lab/>

## Update the website

Most updates require editing only [`content/site-data.ts`](content/site-data.ts):

- add graduate students to `students`
- add or close positions in `openings`
- update ongoing projects in `projects`
- update active grants in `grants`
- add recent research papers to `publications`
- change the `lastUpdated` date

To add the CV, copy the PDF to `public/monika-yadav-cv.pdf` and set:

```ts
cvUrl: '/monika-yadav-cv.pdf';
```

## Publish approved updates

The website is deployed to GitHub Pages through the
[`Deploy research group website`](.github/workflows/deploy-pages.yml) workflow.
Deployment is manual so edits are not published automatically. After reviewing an
update, open the repository's **Actions** tab, select the deployment workflow, and
choose **Run workflow**.
