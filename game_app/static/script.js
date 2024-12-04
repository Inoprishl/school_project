document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById('text-box')
    const nextButton = document.getElementById('next-button')

    text = []
    index = 0

    fetch('/get_text_file/')
        .then(responce => responce.json())
        .then(data => {
            if (data.error) {
                textBox.textContent = "Ошибка загрузки текста."
            } else {
                text = data.text
                showText()
            }
        })
    function showText() {
        if (index < text.length) {
            textBox.textContent = text[index]
        } else {
            textBox.textContent = "End"
            nextButton.style.display = 'none'
        }
    }
    nextButton.addEventListener('click', () => {
        index++
        showText()
    })
})