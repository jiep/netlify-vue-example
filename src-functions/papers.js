const osmosis = require('osmosis')
const Bluebird = require('bluebird')

const format = (paper) => {
  const { title, authors, link } = paper
  const link_url = link.startsWith('/') ? `https://eprint.iacr.org${link}` : link
  return {
    title: `${title}`,
    authors: `${authors}`,
    link: `${link_url}`
  }
}

const getLastWeekPapers = () => {
  const url = 'https://eprint.iacr.org/eprint-bin/search.pl?last=7&title=1'

  return new Bluebird((resolve, reject) => {
    osmosis
      .get(url)
      .set({
        'papers': [
          osmosis
            .find('body > dl > dt > a:nth-child(1)')
            .follow('@href')
            .find('body')
            .set({
              'title': 'b',
              'authors': 'i',
              'link': 'a@href'
            })
        ]
      })
      .data((listing) => resolve(listing.papers.map(p => format(p))))
  })
}

getLastWeekPapers().then(x => console.log(x))

// exports.handler = async (event, context) => {
//   return (await getLastWeekPapers())
// }
