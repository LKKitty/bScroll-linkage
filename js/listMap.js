// 数据
// 请求列表数据
$.ajax({
  url: "../mock/city.json",
  post: 'get',
  success: (res) => {
    let data = res.data.cities
    if(data.length != 0) {
      // $('.title').find()attr('src',)
      console.log(data)
      // 处理数据
      for(let i=0; i<data.length;i++){
        $(".lists-ul").append(`
          <li class="list-group">
            <h2 class="list-group-title">A</h2>
            <ul>
              <li class="list-group-item">
                  <img class="avatar" src="./image.png">
                  <span class="name">生活</span>
              </li>
            </ul>
          </li>
        `)
      }
    } else {
      $(".listview > ul").append(`<li class="list-group-item">
      <span class="name">暂时没有数据</span>
      </li>`)
      }
    }
  // }
})