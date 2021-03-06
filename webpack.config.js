const path = require('path'); //path module

module.exports = {
    mode: 'development', //use production at the end
    entry: './src/index.js', //edit this 
    //entry: './src/index-mapbox.js', //for mapbox 
    //entry: './src/index01.js',
    //entry: './src/index02.js',
    //entry: './src/index03.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
		filename: 'bundle-01.js' // edit this
        //filename: 'bundle-02.js'
	},
    module:{ // モジュールプロパティの中に
        rules:[
            { // ルールズを配列で指定
            test: /\.css$/, // 対象の拡張子を正規表現で指定。
            use:[ // どのローダーを使うのか（下から実行されていく）
                'style-loader', //cssをhtmlにstyleタグとして出力
                'css-loader'
            ]
        }
    ]
    }
  };