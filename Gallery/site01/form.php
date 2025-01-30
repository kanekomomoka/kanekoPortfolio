<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[公式]お問い合わせ/ 長野県飯田市にある給食を食べられる食堂 おいしい給食亭</title>
    
    <link rel="stylesheet" href="css/otoiawase.css" />
    <link rel="icon" href="images/top/Logo01.png">
</head>
<body>
        <!-- ヘッダー-->
        <header class="c-header c-hamburger-menu"><!-- 追記 クラスを追記 -->
      <a href="index.html" class="c-header__logo">
           <img class="logo_main" src="images/top/Logo.png" alt="なつかし給食亭" >
      </a>
      <input type="checkbox" name="hamburger" id="hamburger" class="c-hamburger-menu__input"/><!-- 追記 idはlabelのforと同じにする -->
      <label for="hamburger" class="c-hamburger-menu__bg"></label><!-- 追記 ハンバーガーメニュを開いた時の背景 -->
      <ul class="c-header__list c-hamburger-menu__list"><!-- 追記 クラスを追記 -->

        <li class="c-header__list-item01">
          <a href="index.html" class="c-header__list-link01">トップ</a>
        </li>
        <li class="c-header__list-item">
          <a href="menu.html" class="c-header__list-link">こんだて</a>
        </li>
        <li class="c-header__list-item">
          <a href="news.html" class="c-header__list-link">お知らせ</a>
        </li>
        <li class="c-header__list-item">
          <a href="shop.html" class="c-header__list-link">お店の紹介</a>
        </li>
        <li class="c-header__list-item">
          <a href="blog.html" class="c-header__list-link">コラム
            
          </a>
        </li>

        
      </ul>
      <label for="hamburger" class="c-hamburger-menu__button">
        
        
        <!-- 追記 ハンバーガーメニューのボタン -->
        <span class="c-hamburger-menu__button-mark"></span>
        <span class="c-hamburger-menu__button-mark"></span>
        <span class="c-hamburger-menu__button-mark"></span>
      </label>
    </header>



    <div class="main">
    <div class="contact-form">
      <div class="form-title">お問い合わせ</div>
      <form method="post" action="sent.html">
        <div class="form-item">名前</div>
        <input type="text" name="name">

        <div class="form-item">年齢</div>
        <select name="age">
          <option value="未選択">選択してください</option>
          <!-- for文を用いて6歳から100歳までをoptionで選べるようにしましょう -->
          <?html 
            for ($i = 6; $i <= 100; $i++) {
              echo "<option value='{$i}'>{$i}</option>";
            } 
          ?>
        </select>

        <div class="form-item">お問い合わせの種類</div>
        <?html 
          $types = array('予約に関するお問い合わせ' ,'寄付に関するお問い合わせ', '取材・メディア関連のお問い合わせ', 'お持ち帰りに関するお問い合わせ', 'その他');
         ?>
        <!-- この下にselectタグを書いていきましょう -->
        <select name="category">
          <option value="未選択">選択してください</option>
           <?html
             foreach ($types as $type) {
              echo "<option value='{$type}'>{$type}</option>";
             }
           ?>

        </select>

        <div class="form-item">内容</div>
        <textarea name="body"></textarea>

        <input type="submit" value="送信">
      </form>
    </div>
  </div>
</body>
</html>