const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // Proxy for the root path
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://ANIroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com',
            changeOrigin: true,
        })
    );

    // Proxy for the "/ws" path
    app.use(
        "/ws",
        createProxyMiddleware({ target: "http://localhost:8080", ws: true })
    );
}