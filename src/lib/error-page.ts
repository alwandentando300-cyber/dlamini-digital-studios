export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #FFFFFF; color: #0F172A; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; border: 1px solid color-mix(in oklab, #0F172A 10%, #FFFFFF); border-radius: 1rem; background: #FFFFFF; box-shadow: 0 20px 50px -20px color-mix(in oklab, #0F172A 18%, transparent); }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: color-mix(in oklab, #0F172A 65%, #FFFFFF); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #0F172A; color: #FFFFFF; }
      .secondary { background: #FFFFFF; color: #0F172A; border-color: color-mix(in oklab, #0F172A 20%, #FFFFFF); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
