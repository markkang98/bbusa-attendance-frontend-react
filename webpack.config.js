var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PAGE_DIR = path.join("src", "pages", path.sep);
module.exports = {
    entry: {
      'login' : './src/pages/login/index.js',
      'createaccount': './src/pages/createaccount/create-account.js',
      'newstudent' : './src/pages/newstudent/new-student.js',
      'studentlist' : './src/pages/studentlist/student-list.js',
      'attendancehistory' : './src/pages/attendancehistory/attendance-history.js'
    },
    plugins:[
      new HtmlWebPackPlugin({
        chunks:["login", "vendor"],
        template: "./src/pages/login/index.html",
        filename: "index.html"
      }),
      new HtmlWebPackPlugin({
        chunks:["createaccount", "vendor"],
        template: "./src/pages/createaccount/create-account.html",
        filename: "create-account.html"
      }),
      new HtmlWebPackPlugin({
        chunks:["newstudent", "vendor"],
        template: "./src/pages/newstudent/new-student.html",
        filename: "new-student.html"
      }),
      new HtmlWebPackPlugin({
        chunks:["studentlist", "vendor"],
        template: "./src/pages/studentlist/student-list.html",
        filename: "student-list.html"
      }),
      new HtmlWebPackPlugin({
        chunks:["attendancehistory", "vendor"],
        template: "./src/pages/attendancehistory/attendance-history.html",
        filename: "attendance-history.html"
      }),
  
    ],
    module: {
      rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
        options:{
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
          ], 
        }
      },
    },
    {
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    },
  ]
  },
  resolve:{
    alias:{
       src: path.resolve(__dirname, "src"),
       components: path.resolve(__dirname, "src", "components")
    }
  },
  optimization: {
    splitChunks: {
       cacheGroups: {
          vendor: {
             test: /node_modules/,
             chunks: "initial",
             name: "vendor",
             enforce: true
          }
       }
    }
  }
}
  