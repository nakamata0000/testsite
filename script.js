function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';

  // ランダムな位置を設定
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.animationDuration = Math.random() * 2 + 1 + 's'; // 1〜3秒の間でランダム

  document.body.appendChild(sparkle);

  // アニメーション終了後に要素を削除
  sparkle.addEventListener('animationend', () => {
    sparkle.remove();
  });
}

// 0.5秒ごとにキラキラを生成
setInterval(createSparkle, 500);