const path = require('path'); 
const webpack = require('webpack'); 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
 
module.exports = { 
    entry: './src/index.js', 
    module: { 
        rules: [ 
            { 
                test: /\.js$/, 
                include: /src/, 
                loaders: "babel-loader" 
            }, 
            { 
                test:/\.css$/, 
                use: [ 
                    {loader: 'style-loader'}, //inject style tag 
                    {loader: 'css-loader'}, //fix url() 
                    {loader: 'postcss-loader'} //Autoprefixer 
                ], 
            }, 
            { 
                test:/\.scss$/, 
                use: [ 
                    {loader: 'style-loader'}, //inject style tag 
                    {loader: 'css-loader'}, //fix url() 
                    {loader: 'postcss-loader'}, //Autoprefixer 
                    {loader: 'sass-loader'} //scss to css 
                ], 
            } 
        ], 
    },  
    plugins: [ 
        new CopyWebpackPlugin([ 
            {  
                from: 'src/index.html', 
                to:'index.html' 
            } 
        ]) 
    ], 
    devServer:{ 
        inline:true, 
        contentBase: 'dist', 
        port:3000 
    }, 
    output: { 
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist') 
    } 
};