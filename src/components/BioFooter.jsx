export default function BioFooter() {
  return (
    <footer className="bio-footer">
      <div className="bio-container">
        <div className="footer-content">
          <div className="footer-name gradient-text">Роман Игнатович</div>
          <div className="footer-tags">
            <span>🎮 Valorant</span>
            <span>🦊 Furry</span>
            <span>💸 Затрат</span>
            <span>🎧 Gamer</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} — Биография Романа Игнатовича
          </p>
        </div>
      </div>
    </footer>
  )
}
