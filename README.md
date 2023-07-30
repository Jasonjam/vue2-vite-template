## 使用
```
// 安裝
$ npm install
// 輸出 & 預覽
$ npm run dev
$ npm run preview
```
preview  
由dist當作根目錄，而不是專案資料夾當目錄  
使用vite無法像以前直接點開html檔案就可預覽  
> 經測試，可以在虛擬主機(靜態)正常顯示


### 與vue cli不同之處
|Vite|vs|CLI|
|:-:|:-:|:-:|
|vite.config.js| vs |vue.config|
|root/index.html  //template| vs |root/public/index.html  //template|

