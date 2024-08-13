$(function() {
  $(window).on('load', () => {
    // ドキュメントが読み込み完了した時
    console.log('loadイベントが発生しました');
    });
    // 画面をスクロールした時
    $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});