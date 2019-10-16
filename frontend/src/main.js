import 'marcel-plugin'

const renderTwitter = ({ url, lang, width, height, theme, linkColor }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <a class="twitter-timeline"
      data-dnt="true"
      href="${url}"
      ${linkColor ? `data-link-color="${linkColor}"` : ''}
      ${theme ? `data-theme="${theme}"` : ''}
      ${lang ? `data-lang="${lang}"` : ''}
      ${width ? `data-width="${width}"`: ''}
      ${height ? `data-height="${height}"` : ''}
    ></a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </body>
</html>
`

class MarcelPluginTwitter extends Marcel.Plugin {
  constructor() {
    super({
      defaultProps: {
        lang: 'fr'
      }
    })
    this.root = document.querySelector('#root')
  }

  render() {
    this.root.innerHTML = ''
    const iframe = document.createElement('iframe')
    iframe.srcdoc = renderTwitter(this.props)
    iframe.className = 'twitter'
    this.root.appendChild(iframe)
  }
}

Marcel.init(MarcelPluginTwitter)

// uncomment this line to try the plugin in a browser :
Marcel.changeProps({url: 'https://twitter.com/TwitterDev/timelines/539487832448843776'})
