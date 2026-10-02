
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GAMERS | Gaming Hub</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="navbar">
    <h1>🎮 GAMERS</h1>
    <span>YOUR GAMING HUB</span>
  </header>

  <main>
    <section class="hero">
      <p class="tag">WELCOME TO GAMERS</p>
      <h2>Discover Your Next Game</h2>
      <p>Explore games and find your next adventure.</p>

      <input
        type="search"
        id="searchInput"
        placeholder="🔍 Search games..."
        aria-label="Search games"
      >
    </section>

    <section class="games-section">
      <h2>Explore Games</h2>
      <p id="gameCount"></p>
      <div id="gamesContainer" class="games-grid"></div>
    </section>
  </main>

  <footer>
    <p>© 2026 GAMERS. Built for gamers.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

 
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #0b1020;
  color: white;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 8%;
  background: #11182b;
  border-bottom: 1px solid #26314a;
}

.navbar h1 {
  color: #7c5cff;
  font-size: 26px;
}

.navbar span {
  color: #aab5cc;
  font-size: 12px;
  letter-spacing: 2px;
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #171d3d, #0b1020);
}

.tag {
  color: #a78bfa;
  letter-spacing: 3px;
  font-size: 13px;
  margin-bottom: 18px;
}

.hero h2 {
  font-size: clamp(30px, 5vw, 52px);
  margin-bottom: 15px;
}

.hero > p:not(.tag) {
  color: #aab5cc;
  margin-bottom: 30px;
}

#searchInput {
  width: min(100%, 500px);
  padding: 16px 20px;
  border: 1px solid #414d6c;
  border-radius: 12px;
  background: #151d32;
  color: white;
  font-size: 16px;
  outline: none;
}

#searchInput:focus {
  border-color: #8b5cf6;
}

.games-section {
  padding: 45px 8%;
}

.games-section h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

#gameCount {
  color: #aab5cc;
  margin-bottom: 25px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit, minmax(220px, 1fr)
  );
  gap: 22px;
}

.game-card {
  background: #151d32;
  border: 1px solid #27334d;
  border-radius: 14px;
  padding: 25px;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: translateY(-5px);
  border-color: #8b5cf6;
}

.game-icon {
  font-size: 42px;
  margin-bottom: 18px;
}

.game-card h3 {
  margin-bottom: 10px;
}

.game-card p {
  color: #aab5cc;
  line-height: 1.5;
}

.category {
  display: inline-block;
  margin-top: 18px;
  padding: 6px 12px;
  background: #302454;
  color: #c4b5fd;
  border-radius: 20px;
  font-size: 12px;
}

.no-results {
  color: #aab5cc;
  padding: 20px 0;
}

footer {
  text-align: center;
  padding: 30px 15px;
  color: #aab5cc;
  border-top: 1px solid #26314a;
}

@media (max-width: 500px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .hero {
    padding: 55px 18px;
  }

  .games-section {
    padding: 35px 18px;
  }
}

</style>