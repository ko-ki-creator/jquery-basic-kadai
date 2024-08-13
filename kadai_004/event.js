  $(window).on('load', () => {
    // ドキュメントが読み込み完了した時
    console.log('loadイベントが発生しました');
    });

    $(function() {
    // 画面をスクロールした時
    $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });
});
