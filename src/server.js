import app from './app.js'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Connected http://127.0.0.1:${PORT}`)
})
