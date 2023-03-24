// module.exports = {
//     // 配置路径别名
//     configureWebpack: {
//         devServer: {
//             disableHostCheck: true,
//             proxy: {
//                 //配置跨域
//                 '/api': {
//                     target: "http://127.0.0.1:3333/",//转发的目标地址
//                     secure : false,
//                     changOrigin: true,
//                     pathRewrite: { //是否重写 如果重写的话，本地/api/a1/b1 就回变成/a1/b1 
//                         '^/api': '' //意思就是把api这个替换成空 ''
//                     }
//                 }
//             }
//         }
//     }
// }