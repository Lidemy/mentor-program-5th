#### 請以自己的話解釋 API 是什麼
設計好的資料，為提供他人方便拿取，又不需要整個資料庫都給他人看到

這時就需要透過api讓他人按照設計好的格式(介面)拿取想要的資料

也就是說api用於交換資料，給api需求，api將需求呈現給資料庫，再以固定形式返回資料


#### 請找出三個課程沒教的 HTTP status code 並簡單介紹
100 目前ok，請繼續等待請求

414 客戶端的 URI 請求超過伺服器願意解析的長度。

505 請求使用的 HTTP 版本不被伺服器支援。


#### 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
url:  https://restaurant.com

  說明 |  method | url + 路徑        | 需要參數

回傳所有餐廳 get | /restaurants      | 

回傳單一餐廳 get | /restaurants/:id  |

刪除餐廳  delete | /restaurants/:id  |

新增餐廳    post |  /restaurants     | name:名稱

更改餐廳   patch |  /restaurants/:id | name:名稱
