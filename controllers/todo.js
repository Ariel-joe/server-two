const getToDo = (req, res) => {
    res.json({
        message: "this is a GET"
    })
}

const createToDo = (req, res) => {
    res.json({
        message: "this is a POST"
    })
}

export { getToDo, createToDo}