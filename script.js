let count = 0
const viewCount = document.getElementById("count")

const increment = () => {
    count++
    viewCount.textContent = count
}

const dincrement = () => {
    count--
    viewCount.textContent = count
}

const reset = () => {
    count = 0
    viewCount.textContent = count
}