const common = require('./webpack.common.js');
const {merge}=require('webpack-merge');
const uglifyJsPlugin=require('uglifyjs-webpack-plugin');
const cssMinimizer=require('css-minimizer-webpack-plugin');

module.exports=merge(common,{
    mode:'production',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    optimization:{
        minimizer: [new uglifyJsPlugin(), new cssMinimizer()]
    }
});