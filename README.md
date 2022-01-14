
# Vuex 的組成


# 1. state（data）
```
響應式的資料狀態儲存, 資料狀態變化時，有用到的 component 都會即時更新
```
# 2. action（methods）
```
操作同步或異步事件的處理但不直接修改資料（state）
是透過commit → 呼叫 mutation 改變 state
```
# 3. getter（computed）
```
加工資料呈現
同 computed 一樣會被緩存、依賴值變更了才會重新計算
```
# 4. mutation
```
改變state
只處理同步函數：不要在這進行非同步的動作（例如 setTimeout / 打 API 取遠端資料...等）
```


