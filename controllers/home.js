const getHOME = (req, res) => {
        res.send('Hello World')
}

const postHOME = (req, res) => {
    res.send(' POSTING Hello World')
}

const patchHOME = (req, res) => {
    res.json({
        message: "you are PATCHING around"
    })
}

export { getHOME, postHOME, patchHOME }
