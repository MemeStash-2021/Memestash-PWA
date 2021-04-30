function redirectCard(e) {
    e.preventDefault()
    console.log(e.target.dataset.id)
    localStorage.setItem("cardId", e.target.dataset.id)
    window.location.href = "card.html"
}
