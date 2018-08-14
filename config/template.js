const template = (helmet, html = '', initialState = {}) => {
    return (`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="root">
            ${html}
          </div>
          <script>
            window.__STATE__ = ${JSON.stringify(initialState)}
          </script>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `);
}

module.exports = { template };
