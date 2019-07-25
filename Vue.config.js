module.exports ={
    devServer:{
        proxy:{
            "/flower":{
                "target":"https://m.hua.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/flower":""
                }
            }
        }
    }
}