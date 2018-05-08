const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
const isDev=process.env.NODE_ENV==='development';
const config={
	entry:path.join(__dirname,'src/index.js'),
	output:{
		filename:'main.js',
		path:path.join(__dirname,'dist/')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.jsx$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['env']
					}
				}
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader',
					{
						loader:'postcss-loader',
						options: {
		                    plugins: [
		                        require('autoprefixer')()
		                    ],
		                    sourceMap:true
		                }
					}
				]
			},
			{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					{
						loader:'postcss-loader',
						options: {
		                    plugins: [
		                        require('autoprefixer')()
		                    ],
		                    sourceMap:true
		                }
					},
					'less-loader'
				]
			},
			{
				test:/\.(png|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'src/template.html')
		}),
		new webpack.DefinePlugin({
			'procsss.env':{
				NODE_ENV:isDev?'"development"':'"production"'
			}
		})
	]
}

	console.log(isDev)
if(isDev){
	config.devtool='#cheap-module-eval-source-map'//便于调试
	config.devServer={
		port:8000,
		host:'0.0.0.0',
		overlay:{
			errors:true
		},
		hot:true//没有这个文件改动时页面会自动刷新更新，加上后页面不刷新更新
		        //需要配合HotModuleReplacementPlugin()插件
	}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),//热加载
		new webpack.NoEmitOnErrorsPlugin()

	)
}
module.exports=config;