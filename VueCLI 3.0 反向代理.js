/**
 * 新建配置文件
在项目的根目录下新建 vue.config.js 文件，自Vue CLI 3开始，
项目中所有的配置信息都写在这个文件中（2在config目录中配置）。
配置反向代理
 */
// 设置代理
// vue.config.js
module.exports = {
    devServer: {
        host: '0.0.0.0',//设置主机地址
        port: 8040,//设置默认端口
        proxy: { //设置代理
            '/api': {
                target: 'http://192.168.10.3:3000/',
                ws: true,// 如果要代理 websockets
                changeOrigin: false// 将主机标头的原点更改为目标URL
            }
        }
    }
}
