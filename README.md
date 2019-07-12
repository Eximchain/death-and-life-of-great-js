# death-and-life-of-great-js
Source code underlying data visualizations powering "The Death &amp; Life of Great Javascript Frameworks"

The goal of this project is taking the principles laid out by Jane Jacobs in the "The Death &amp; Life of Great American Cities" and applying them to Javascript frameworks, ideally to find some insight about what makes them succeed.  Jacobs' work focused on all the subtle ways streets, neighborhoods, and districts interact with each other in order to produce an exciting, vibrant city.  As I read this, it struck me as one of the earlier studies of emergent behavior in one of its most complex sample environments.  The proper prose will get laid out eventually, but in the meantime, here is the progress of my source data gathering in order to test my hypothetical analogies.

## Potential Metrics

- Most downloaded packages
- Packages with the largest dependency ecosystem 
  - by number of packages 
  - number of downloads across all packages
- Packages with most SO questions
- Packages with most GitHub stars

## Sources

- Historical download counts: available per package via [this API](https://github.com/npm/registry/blob/master/docs/download-counts.md) going back to 2015/01/10.  This [blog post](https://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts) goes in depth on how they count package downloads, as there are many automated systems pulling from the registry.
- Leaderboards: this [gist](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491) shows the top 1000 packages by number of packages depending on them and their PageRank score.  It is irregularly maintained by a cron job, but there's a sample going back to 2017 on the Wayback Machine.
- StackOverflow Trends: SO exposes [graphs on number of questions](https://insights.stackoverflow.com/trends) by tag.  Many specific libraries don't register, but you can make comparisons across major libraries like Angular v React, Webpack v Gulp, etc.  Biggest perk is that the data goes all the way back to 2009.

## Existing Chart Tools

No need to reinvent the wheel -- there are already tools for generating charts comparing packages by download count, like:
- [npmcharts.com](https://npmcharts.com/)
- [npmtrends.com](https://www.npmtrends.com/gulp-vs-browserify-vs-rollup-vs-grunt)